import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Sortly from 'react-sortly'

const SimpleDemo = props => {

	const ITEMS =  props.data

	const itemStyle = {
		border: '1px solid #ccc',
		cursor: 'move',
		padding: 10,
		marginBottom: 4,
	}

	const muteStyle = { opacity: 0.3 }
	const [items, setItems] = useState(ITEMS)
	const ItemRenderer = (props) => {
		const {
			name, path, connectDragSource, connectDropTarget, 
			isDragging, isClosestDragging,
		} = props;
		const style = {
			...itemStyle,
			...(isDragging || isClosestDragging ? muteStyle : null),
			marginLeft: path.length * 30,
		}
		const el = <div style={style}>{name}</div>
		return connectDragSource(connectDropTarget(el))
	}

	const handleChange = (items) => {
		setItems(items);
	}

	return (
		<DndProvider backend={HTML5Backend}>
		<div>
			<h2>{props.title}</h2>
			<Sortly 
				items={items} 
				itemRenderer={ItemRenderer}
				onChange={handleChange}
			/>
		</div>
		</DndProvider>
	)
}

export default SimpleDemo