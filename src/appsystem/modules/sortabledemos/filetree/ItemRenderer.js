import React from 'react'
import classNames from 'classnames'
import { IconFolder, IconFolderOpen, IconFile } from './assets/icons'

const Folder = ({ name, collapsed, index, onToggleCollapse }) => {
	const handleClick = () => {
		onToggleCollapse(index)
	}
	return (
		<div className="bodyitem folder">
			<button className='toggleCollapseHandle' onClick={handleClick}>
        {
          (collapsed) ? <IconFolder/> : <IconFolderOpen/>
        }
				{/* <i className={classNames('icon', 'fa', { 'fa-folder-o': collapsed, 'fa-folder-open-o': !collapsed })} /> */}
			</button>
			{name}
		</div>
	)
}

Folder.defaultProps = {
	collapsed: false,
}

const File = ({ name, collapsed }) => (
	<div className={classNames('bodyitem', 'file', { 'collapsed': collapsed })}>
      <IconFile />
		{name}
	</div>
)


File.defaultProps = {
	collapsed: false,
}

const ItemRenderer = (props) => {
	const { connectDragSource, connectDragPreview, connectDropTarget, isDragging, isClosestDragging, type, path }
	= props
	const className = classNames('containeritem', { 'mute': isDragging || isClosestDragging })
	return connectDragSource(connectDragPreview(connectDropTarget(
		<div className={className} style={{ paddingLeft: path.length * 20 }}>
			{type === 'folder' && <Folder {...props} />}
			{type === 'file' && <File {...props} />}
		</div>,
	)))
}

export default ItemRenderer