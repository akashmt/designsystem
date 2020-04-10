import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { name } from 'faker/locale/en'
import Sortly, { convert } from 'react-sortly'
import ItemRenderer from './ItemRenderer'

import styled from 'styled-components'

const generate = numItems =>
	Array
		.from(Array(numItems).keys())
		.map(index => ({ id: index + 1, parentId: 0, name: name.findName(), index }))

export default class StressTest extends Component {
	state = { numItems: this.props.numItems, generating: false, items: convert(generate(this.props.numItems)) }

	handleChange = (items) => {
		this.setState({ items })
	}

	handleChangeNumItems = (e) => {
		const numItems = parseInt(e.target.value, 10)
		const validNumber = !isNaN(numItems)
		this.setState({ numItems: validNumber ? numItems : '', generating: validNumber }, () => {
			if (validNumber) {
				this.generate()
			}
		})
	}

	generate = () => {
		const items = convert(generate(this.state.numItems))
		this.setState({ items, generating: false })
	}

	render() {
    const { numItems, items, generating } = this.state
    const props = this.props
		return (
			<DndProvider backend={HTML5Backend}>
				<StyledSection>
					<h2>{props.title}</h2>
					<div className="row">
						<div className="col-12 col-lg-8 col-xl-6">
							<div className="input-group">
								<input
									type="number"
									min={1}
									className="form-control"
									value={numItems}
									onChange={this.handleChangeNumItems}
								/>
								<span className="input-group-addon">items{generating && ' generating...'}</span>
							</div>
							<br />
							<Sortly items={items} itemRenderer={ItemRenderer} onChange={this.handleChange} />
						</div>
					</div>
				</StyledSection>
			</DndProvider>
		)
	}
}

const StyledSection = styled.section`
	.containeritem {
		margin-bottom: 10px;
		.bodyitem {
			padding: 10px;
			cursor: move;
			border: 1px solid #ccc;
		}
		&.mute {
			.bodyitem {
				border-style: dashed;
				opacity: .3;
			}
		}
	}
`