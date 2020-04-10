import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Sortly from 'react-sortly'
import ItemRenderer from './ItemRenderer'

import styled from 'styled-components'


export default class TableSortableRow extends Component {
	state = { items: this.props.data }
	
	handleChange = (items) => {
		this.setState({ items })
	}

	render() {
    const { items } = this.state;
    const props = this.props;
		return (
			<DndProvider backend={HTML5Backend}>
				<StyledSection>
					<h2>{props.title}</h2>
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<Sortly
							component="tbody"
							items={items}
							itemRenderer={ItemRenderer}
							maxDepth={0}
							onChange={this.handleChange}
						/>
					</table>
				</StyledSection>
			</DndProvider>
		)
	}
}

const StyledSection = styled.section`
	.container {
		cursor: move;
		&.mute { opacity: 0; }
	}
	table {
		margin-bottom: 1rem;
		width: 100%;
		max-width: 100%;
		background-color: transparent;
		th {
			text-align: left;
			vertical-align: bottom;
			border-bottom: 2px solid #e9ecef;
		}
		td, th {
			padding: .75rem;
			vertical-align: top;
			border-top: 1px solid #e9ecef;
		}
	}
`