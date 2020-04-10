import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Sortly from 'react-sortly'
import ItemRenderer from './ItemRenderer'

import styled from 'styled-components'


export default class HorizontalList extends Component {
	state = { items: this.props.data }

	handleChange = (items) => {
		this.setState({ items })
	}

  render() {
    const { items } = this.state;
    const props = this.props
		return (
			<DndProvider backend={HTML5Backend}>
				<StyledSection>
					<h2>{props.title}</h2>
					<div className="clearfix">
						<Sortly
							maxDepth={0}
							items={items}
							switchMode
							itemRenderer={ItemRenderer}
							onChange={this.handleChange}
						/>
					</div>
				</StyledSection>
			</DndProvider>
		)
	}
}

const StyledSection = styled.section`
  .containeritem {
    float: left;
    margin: 10px;
    padding: 4px;
    width: 150px;
    height: 150px;
    cursor: move;
    text-align: center;
    color: white;
    &.mute { opacity: .3; }
  }
`