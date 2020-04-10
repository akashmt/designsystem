import React, { Component } from 'react'
import styled from 'styled-components'

class Spin extends Component {
	render(){
   const { size } = this.props
   let sizeClass = ''
   if(size === "small") {
    sizeClass = 'app-spin-sm'
   } else if(size === "large") {
    sizeClass = 'app-spin-lg'
   }
		return (
      <StyledSection>
        <div class={`app-spin ${sizeClass} app-spin-spinning`}>
          <span class="app-spin-dot app-spin-dot-spin">
            <i class="app-spin-dot-item"></i>
            <i class="app-spin-dot-item"></i>
            <i class="app-spin-dot-item"></i>
            <i class="app-spin-dot-item"></i>
          </span>
        </div>
      </StyledSection>
		)
	}
}

export default Spin

const StyledSection = styled.section`
.app-spin {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-right: 16px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  position: absolute;
  display: none;
  color: #1890ff;
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.app-spin-spinning {
  position: static;
  display: inline-block;
  opacity: 1;
}
.app-spin-dot-spin {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: antRotate 1.2s infinite linear;
  animation: antRotate 1.2s infinite linear;
}
.app-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 1em;
  height: 1em;
}
.app-spin-dot-item {
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: 0.3;
  -webkit-animation: appSpinMove 1s infinite linear alternate;
  animation: appSpinMove 1s infinite linear alternate;
  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    top: 0;
    right: 0;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    right: 0;
    bottom: 0;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  &:nth-child(4) {
    bottom: 0;
    left: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
}

.app-spin-sm {
  .app-spin-dot {
    font-size: 14px;
    i {
      width: 6px;
      height: 6px;
    }
  }
} 


.app-spin-lg {
  .app-spin-dot {
    font-size: 32px;
    i {
      width: 14px;
      height: 14px;
    }
  }
} 


@keyframes appSpinMove {
  to {
    opacity: 1;
  }
}

@keyframes antRotate {
  to {
    transform: rotate(405deg);
  }
}

`