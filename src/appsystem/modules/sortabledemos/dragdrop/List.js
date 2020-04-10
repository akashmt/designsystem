import React, { useState } from 'react'
import styled from 'styled-components'

const placeholder = document.createElement("li")
placeholder.className = "placeholder"

const List = props => {
	const [colors, setColors] = useState(props.data)

	const dragStart = (e) => {
		e.dragged = e.currentTarget
		e.dataTransfer.effectAllowed = 'move'
		e.dataTransfer.setData('text/html', e.dragged)
	}

	const dragEnd = (e) => {
		e.dragged.style.display = 'block'
		e.dragged.parentNode.removeChild(placeholder)
		// update state
		var data = [...colors]
		var from = Number(e.dragged.dataset.id)
		var to = Number(e.over.dataset.id)
		if(from < to) to--
		data.splice(to, 0, data.splice(from, 1)[0])
		setColors(data)
	}

	const dragOver = (e) => {
		e.preventDefault()
		e.dragged.style.display = "none"
		if(e.target.className === 'placeholder') return
		e.over = e.target
		e.target.parentNode.insertBefore(placeholder, e.target)
	}
	
	const listItems = () => {
		return colors.map((item, i) => {
			return (
				<li 
					data-id={i}
					key={i}
					draggable='true'
					onDragEnd={dragEnd}
					onDragStart={dragStart}>{item}</li>
			)
		})
	} 

	return (
    <StyledDragDrop>
      <ul onDragOver={dragOver}>
        {listItems()}
      </ul>
    </StyledDragDrop>
	)
	
}

export default List

const StyledDragDrop = styled.div`
  padding: 15px;
  h1 { margin: 15px 0px; }
  ul {
    list-style: none;
    margin:0;
    padding:0;
    border: 5px solid #e1e1e1;
    box-shadow: 1px 3px 8px #888;  
  }
  li {
    padding: 10px 15px;
    background:#eee;
    &:hover {
      background: #e1e1e1;
    }
  }
  .placeholder {
    background: rgb(255,240,120);
    &:before {
      content: "Drop here";
      color: rgb(225,210,90);
    }
  }
`
