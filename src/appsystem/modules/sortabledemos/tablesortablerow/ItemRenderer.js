import React from 'react'
import classNames from 'classnames'

const ItemRenderer = (
		{ connectDragSource, connectDragPreview, connectDropTarget, isDragging, isClosestDragging, id, name, email },
	) => {
	const className = classNames('container', { 'mute': isDragging || isClosestDragging })
	return connectDragSource(connectDragPreview(connectDropTarget(
		<tr className={className}>
			<td>{id}</td>
			<td>{name}</td>
			<td>{email}</td>
		</tr>,
	)))
}

export default ItemRenderer