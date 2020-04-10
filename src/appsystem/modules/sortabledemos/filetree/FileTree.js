import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Sortly, { findDescendants } from 'react-sortly'
import update from 'immutability-helper'
import ItemRenderer from './ItemRenderer'

import styled from 'styled-components'


export default class FileTree extends Component {
	state = { items: this.props.data }

	handleMove = (items, index, newIndex) => {
		const { path } = items[newIndex]
		const parent = items.find(item => item.id === path[path.length - 1])
		// parent should not be file
		if (parent && parent.type === 'file') {
			return false
		}
		// if parent is collapsed, should expand the parent
		if (parent && parent.collapsed) {
			const updateFn = {
				[items.indexOf(parent)]: { collapsed: { $set: false } },
			}
			const descendants = findDescendants(items, items.indexOf(parent))
			descendants.forEach((item) => {
				updateFn[items.indexOf(item)] = { collapsed: { $set: false } }
			})
			return update(items, updateFn)
		}
		return true
	}

	handleChange = (items) => {
		this.setState({ items })
	}

	handleToggleCollapse = (index) => {
		const { items } = this.state;
		const descendants = findDescendants(items, index)

		const updateFn = {
			[index]: { $toggle: ['collapsed'] },
		}
		descendants.forEach((item) => {
			updateFn[items.indexOf(item)] = { $toggle: ['collapsed'] }
		})

		this.setState(update(this.state, {
			items: updateFn,
		}))
	}

	renderItem = props => <ItemRenderer {...props} onToggleCollapse={this.handleToggleCollapse} />

	render() {
    const { items } = this.state
    const props = this.props
		return (
			<DndProvider backend={HTML5Backend}>
				<StyledSection>
					<h2>{props.title}</h2>
					<Sortly
						items={items}
						itemRenderer={this.renderItem}
						onMove={this.handleMove}
						onChange={this.handleChange}
					/>
				</StyledSection>
			</DndProvider>
		)
	}
}

const StyledSection = styled.section`
	.containeritem {
		.bodyitem {
			padding: 0px 10px;
			cursor: move;
		}
		&.mute {
			.bodyitem { opacity: .3; }
    }
    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
	.folder {
		margin-top: 4px;
		font-weight: bold;
	}
	.file {
		overflow: hidden;
		height: 28px;
		transition: height .3s;
		&.collapsed { height: 0; }
	}
	.toggleCollapseHandle {
		padding: 0;
		cursor: pointer;
		border: none;
		background: none;
	}
	.icon {
		padding: 0 10px;
		width: 36px;
	}
`