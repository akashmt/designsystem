import React, { Component } from 'react'
import styled from 'styled-components'

class Divider extends Component {
	render(){
   const { dashed, orientation, type, children } = this.props

   let typeClass = 'horizontal'
   if(type === 'vertical') {
    typeClass = 'vertical'
   }

   let dashedClass = ''
   if(dashed) {
    dashedClass = 'app-divider-dashed'
   }

   let orientationClass = ''
   if(orientation === 'center') {
    orientationClass = 'app-divider-with-text-center'
   } else if(orientation === 'left') {
    orientationClass = 'app-divider-with-text-left'
   } else if(orientation === 'right'){
    orientationClass = 'app-divider-with-text-right'
   }
		return (
      <StyledSection>
        <div className={`app-divider app-divider-${typeClass}  ${dashedClass} ${orientationClass}`}>
          {children && <span className="app-divider-inner-text">{children}</span>}
        </div>
      </StyledSection>
		)
	}
}

export default Divider

const StyledSection = styled.section`
.app-divider {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  background: #e8e8e8;
  &.app-divider-horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 24px 0;
  }
  &.app-divider-dashed {
    background: none;
    border-color: #e8e8e8;
    border-style: dashed;
    border-width: 1px 0 0;
  }
  &.app-divider-vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    width: 1px;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }
}

.app-divider-horizontal.app-divider-with-text-center, .app-divider-horizontal.app-divider-with-text-left, .app-divider-horizontal.app-divider-with-text-right {
  display: table;
  margin: 16px 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  background: transparent;
}

.app-divider-horizontal.app-divider-with-text-center::before, .app-divider-horizontal.app-divider-with-text-left::before, .app-divider-horizontal.app-divider-with-text-right::before, .app-divider-horizontal.app-divider-with-text-center::after, .app-divider-horizontal.app-divider-with-text-left::after, .app-divider-horizontal.app-divider-with-text-right::after {
  position: relative;
  top: 50%;
  display: table-cell;
  width: 50%;
  border-top: 1px solid #e8e8e8;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  content: '';
}
.app-divider-inner-text {
  display: inline-block;
  padding: 0 24px;
}
.app-divider-horizontal.app-divider-with-text-center::before, .app-divider-horizontal.app-divider-with-text-left::before, .app-divider-horizontal.app-divider-with-text-right::before, .app-divider-horizontal.app-divider-with-text-center::after, .app-divider-horizontal.app-divider-with-text-left::after, .app-divider-horizontal.app-divider-with-text-right::after {
  position: relative;
  top: 50%;
  display: table-cell;
  width: 50%;
  border-top: 1px solid #e8e8e8;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  content: '';
}
.app-divider-horizontal.app-divider-with-text-left::before {
  top: 50%;
  width: 5%;
}
.app-divider-horizontal.app-divider-with-text-left::after {
  top: 50%;
  width: 95%;
}
.app-divider-horizontal.app-divider-with-text-right::before {
  top: 50%;
  width: 95%;
}
.app-divider-horizontal.app-divider-with-text-right::after {
  top: 50%;
  width: 5%;
}
`
