import React, { Component } from 'react'

export default class ItemRenderer extends Component {
	state = { name: this.props.name }

	handleChangeName = (e) => {
		this.setState({ name: e.target.value })
	}

	handleClickRemove = () => {
		const { index, onRemove } = this.props
		console.log(this.props)
		onRemove(index)
	}

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			const { index, onReturn } = this.props
			onReturn(index)
		}
	}

	render() {
		const {
			connectDragSource, connectDragPreview, connectDropTarget,
			active, path,
		} = this.props
		const { name } = this.state
		const dragHandle = connectDragSource(
			<button className="dragHandle" type="button">
				☰
			</button>,
		)

		const styles = { paddingLeft: path.length * 20 }

		return connectDropTarget(connectDragPreview(
			<div className='containerspace' style={styles}>
				<div className='bodyspace'>
					{dragHandle}
					<input
						type="text"
						value={name}
						autoFocus={active}
						className='nameInput'
						onChange={this.handleChangeName}
						onKeyDown={this.handleKeyDown}
					/>
					<button type="button" className='removeBtn' onClick={this.handleClickRemove}>
						X
					</button>
				</div>
			</div>
		))
	}
}