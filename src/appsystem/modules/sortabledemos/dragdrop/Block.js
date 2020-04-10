import React, { useState } from 'react'

import styled from 'styled-components'

const Block = props => {
	const [tasks, setTasks] = useState(props.data)

	const onDragStart = (ev, id) => {
		ev.dataTransfer.setData("id", id)
	}

	const onDragOver = (ev) => {
		ev.preventDefault()
	}

	const onDrop = (ev, cat) => {
			let id = ev.dataTransfer.getData("id");
			let tasks_ = tasks.filter((task) => {
					if (task.name === id) {
							task.category = cat
					}
					return task
			});
			setTasks([...tasks],tasks_)
	}

	var newTasks = {
			wip: [],
			complete: []
	}

	tasks.forEach ((t) => {
		newTasks[t.category].push(
			<div key={t.name} 
					 onDragStart = {(e) => onDragStart(e, t.name)}
					 draggable
					 className="draggable"
					 style = {{backgroundColor: t.bgcolor}}
			>
					{t.name}
			</div>
		)
	})

	return (
      <StyledDragDrop>
        <div className="container-drag">
            <div className="wip"
                onDragOver={(e)=> onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "wip")}}>
                <span className="task-header">WIP</span>
                {newTasks.wip}
            </div>
            <div className="droppable" 
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>onDrop(e, "complete")}>
                  <span className="task-header">COMPLETED</span>
                  {newTasks.complete}
            </div>
        </div>
      </StyledDragDrop>
	)
}

export default Block

const StyledDragDrop = styled.div`
  .container-drag {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  .wip {
    width: 150px;
    height: 100vh;
    background-color: #EEEEEE;
    border-right: 1px dotted;
  }
  .task-header {
    display: inline-block;
    background-color: skyblue;
    width:100%;
  }
  .droppable {
    width: 150px;
    height: 100vh;
    background-color: #9E9E9E;
    border-left: 1px dotted;
  }
  .draggable {
    width: 100px;
    height: 100px;
    background-color: yellow;
    margin: 5px auto;
    line-height: 5em;
  }
`