import React, { Component } from 'react'
import styled from 'styled-components'

class Progress extends Component {
	render(){
    const { type, percent, status, showInfo } = this.props

    //Info class
    let infoClass = 'app-progress-show-info'
    if(showInfo === false) {
      infoClass=""
    }
    
    //Status class
    let statusColor = '#1890ff' 
    let statusClass = 'normal' 
    if(percent === 100) {
      statusClass = "success"
      statusColor = "rgb(135, 208, 104)"
    } else if(status === "active"){
      statusClass = "active"
      statusColor = "rgb(16, 142, 233)"
    } else if(status === "exception") {
      statusClass = "exception"
      statusColor = "rgb(255, 85, 0)"
    }

    //Progress width style
    let widthStyle = {
      width: percent+'%'
    }

    ////Progress width style
    let strokeWidth = percent * 3

     //Type class
     let typeClass = 'line'
     let typeDom = 
     <div>
       <div class="app-progress-outer">
         <div class="app-progress-inner">
           <div class="app-progress-bg" style={widthStyle}></div>
         </div>
       </div>
       <span class="app-progress-text" title={percent + "%"}>{percent}%</span>
     </div>
     
 
     if(type==="circle") {
       typeClass="circle"
       typeDom = 
       <div class="app-progress-inner">
         <svg class="app-progress-circle " viewBox="0 0 100 100">
          <path class="app-progress-circle-trail" d="M 50,50 m 0,-47
            a 47,47 0 1 1 0,94
            a 47,47 0 1 1 0,-94" stroke="#f3f3f3" stroke-linecap="round" stroke-dasharray="300,300" stroke-width="6" fill-opacity="0"></path>
          <path class="app-progress-circle-path" d="M 50,50 m 0,-47
            a 47,47 0 1 1 0,94
            a 47,47 0 1 1 0,-94" stroke={statusColor} stroke-linecap="round" stroke-dasharray={`${strokeWidth},300`} stroke-width={strokeWidth === 0 ? 0 : 6 } fill-opacity="0"></path>
          </svg>
          <span class="app-progress-text" title={percent + "%"}>{percent}%</span>
       </div>
     }
  
    
		return (
      <StyledSection>
        <div class={`app-progress app-progress-${typeClass}  ${infoClass} app-progress-status-${statusClass} app-progress-default`}>
          {typeDom}
        </div>
      </StyledSection>
		)
	}
}

export default Progress

const StyledSection = styled.section`
  .app-progress {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    list-style: none;
    display: inline-block;

    &.app-progress-line {
      position: relative;
      width: 100%;
      font-size: 14px;
    }
    &.app-progress-outer {
      display: inline-block;
      width: 100%;
      margin-right: 0;
      padding-right: 0;
    }
    &.app-progress-show-info .app-progress-outer {
      margin-right: calc(-2em - 8px);
      padding-right: calc(2em + 8px);
    }
    &.app-progress-show-info .app-progress-text {
      display: inline-block;
    }
  }
  .app-progress-outer {
    display: inline-block;
    width: 100%;
    margin-right: 0;
    padding-right: 0;
  }
  .app-progress-inner {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 100px;
  }
  .app-progress-circle .app-progress-inner {
    position: relative;
    line-height: 1;
    background-color: transparent;
  }
  .app-progress-text {
    display: none;
    width: 2em;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 1em;
    line-height: 1;
    white-space: nowrap;
    text-align: left;
    vertical-align: middle;
    word-break: normal;
  }
  .app-progress-circle .app-progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1;
    white-space: normal;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .app-progress-success-bg, .app-progress-bg {
    height: 8px;
    position: relative;
    background-color: #1890ff;
    border-radius: 100px;
    -webkit-transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  }
  .app-progress-status-active .app-progress-bg::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 10px;
    opacity: 0;
    -webkit-animation: app-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation: app-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    content: '';
  }
  .app-progress-status-success .app-progress-bg {
    background-color: #52c41a;
  }
  .app-progress-status-exception .app-progress-bg {
    background-color: #f5222d;
  }

  @keyframes app-progress-active {
    0% {
      width: 0;
      opacity: 0.1;
    }
    20% {
      width: 0;
      opacity: 0.5;
    }
    100% {
      width: 100%;
      opacity: 0;
    }
  }

  .app-progress-circle {
    .app-progress-inner {
      width: 120px;
      height: 120px;
      font-size: 24px;
    }
    .app-progress-circle-trail {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s;
    }
    .app-progress-circle-path {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s;
    }
  }
 
`