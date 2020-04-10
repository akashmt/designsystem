import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import Sortly, { convert, add, insert, remove } from 'react-sortly'
import ItemRenderer from './ItemRenderer'

import styled from 'styled-components'

let idSeq = 5
const generateId = () => {
  idSeq += 1
  return idSeq
}


export default class Advanced extends Component {


	state = { items: convert(this.props.data), activeItemId: null }

	handleChange = (items) => {
		this.setState({ items })
	}

	handleChangeItem = (index, data) => {
		this.setState(update(this.state, {
			items: { [index]: { $merge: data } },
		}))
	}

	handleClickAddNewItem = () => {
		const id = generateId()
		const newItemData = { id, name: '' }

		this.setState({ items: add(this.state.items, newItemData) })
		this.setState({ activeItemId: id })
	}

	handleReturn = (targetIndex) => {
		const id = generateId()
		const newItemData = { id, name: '' }
		this.setState({
			items: insert(this.state.items, targetIndex, newItemData),
			activeItemId: id,
		})
	}

	handleRemove = (index) => {
		this.setState({ items: remove(this.state.items, index) })
	}

	renderItem = props => (
		<ItemRenderer
			{...props}
			active={props.id === this.state.activeItemId}
			onChange={this.handleChangeItem}
			onReturn={this.handleReturn}
			onRemove={this.handleRemove}
		/>
	)

	render() {
    const { items } = this.state
    const props = this.props
		return (
			<DndProvider backend={HTML5Backend}>
				<StyledSection>
							<h2>{props.title}</h2>
							<button type="button" className="btn btn-primary" onClick={this.handleClickAddNewItem}>Add New Item</button>
							<br />
							<br />
							<Sortly
								items={items}
								itemRenderer={this.renderItem}
								onChange={this.handleChange}
							/>
				</StyledSection>
			</DndProvider>
		)
	}
}

const StyledSection = styled.section`
	.containerspace {
		margin-bottom: 10px;
		.bodyspace {
			display: flex;
			padding: 10px;
			border: 1px solid #ccc;
		}
		&.mute {
			.bodyspace {
				border-style: dashed;
				opacity: .3;
			}
		}
	}
	%btn {
		padding: 4px 10px;
		border: none;
		background: none;
	}
	.dragHandle {
		@extend %btn;
		cursor: move;
		&:focus {
			outline: none;
		}
	}
	.removeBtn {
		@extend %btn;
		cursor: pointer;
		opacity: .7;
		&:hover { opacity: 1; }
	}
  .nameInput {
    flex: 1;
    margin-left: 5px;
    border: none;
    border-radius: 2px;
    outline: none;
    &:hover, &:focus { box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25); }
  }
`

