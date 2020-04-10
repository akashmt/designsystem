import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
	render(){
   const { type, block, disabled } = this.props

   // Type button class
   let typeClass = ''
   if(type === "primary") {
    typeClass = 'primary'
   } else if(type === "dashed") {
    typeClass = 'dashed'
   } else if(type === "danger") {
    typeClass = 'danger'
   } else if(type === "link") {
    typeClass = 'link'
   } 

   // Block button class
   let blockClass = ''
   if(block) {
    blockClass = 'app-btn-block'
   }

		return (
      <StyledSection>
        <button type="button" className={`app-btn app-btn-${typeClass} ${blockClass}`} disabled={disabled}><span>Primary</span></button>
      </StyledSection>
		)
	}
}

export default Button

const StyledSection = styled.section`
.app-btn {
  margin-right: 8px;
  margin-bottom: 12px;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  &.app-btn-block {
    width: 100%;
  }
  & > i, & > span {
    display: inline-block;
    -webkit-transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    pointer-events: none;
  }
  &:active, &:focus {
    outline: 0;
  }
  &:active, &:hover {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
    text-decoration: none;
  }
  &.app-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &:hover, &:focus {
      color: #fff;
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }
  &.app-btn-dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
    &:hover, &:focus {
      color: #40a9ff;
      background-color: #fff;
      border-color: #40a9ff;
    }
  }
  &.app-btn-danger {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &:hover, &:focus {
      color: #fff;
      background-color: #ff7875;
      border-color: #ff7875;
    }
  }
  &.app-btn-link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    &:hover, &:focus, &:active {
      border-color: transparent;
    }
  }
}
.app-btn-primary[disabled], .app-btn-primary[disabled]:hover, .app-btn-primary[disabled]:focus, .app-btn-primary[disabled]:active, .app-btn-primary[disabled].active {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  text-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

`
