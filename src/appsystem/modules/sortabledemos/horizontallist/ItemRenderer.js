import React from 'react'
import classNames from 'classnames'

const ItemRenderer = (
	{ connectDragSource, connectDragPreview, connectDropTarget, isDragging, isClosestDragging, name, color },
	) => {
		const className = classNames('containeritem', { 'mute': isDragging || isClosestDragging })
		return connectDragSource(connectDragPreview(connectDropTarget(
			<div className={className} style={{ background: color }}>
				<div className="bodyitem">{name}</div>
			</div>,
		)
	))
}

export default ItemRenderer