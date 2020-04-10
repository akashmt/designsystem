import React, { Component } from 'react'
import styled from 'styled-components'

class Alert extends Component {
	render(){
    const { message, type, description } = this.props

    let descClass = '' 
    if(description) {
      descClass = "app-alert-with-description"
    }
    let typeClass = '' 
    if(type === 'success') {
      typeClass = 'success'
    } else if(type === 'info') {
      typeClass = 'info'
    } else if(type === 'warning') {
      typeClass = 'warning'
    } else if(type === 'error') {
      typeClass = 'error'
    }
    
		return (
      <StyledSection>
        <div className={"app-alert app-alert-" + typeClass + " app-alert-no-icon " + descClass}>
          <span className="app-alert-message">{message}</span>
          <span className="app-alert-description">{description}</span>
        </div>
      </StyledSection>
		)
	}
}

export default Alert

const StyledSection = styled.section`
  .app-alert {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    list-style: none;
    position: relative;
    padding: 8px 15px 8px 37px;
    word-wrap: break-word;
    border-radius: 4px;
    margin-bottom: 16px;
    &.app-alert-no-icon {
      padding: 8px 15px;
    }
    &.app-alert-with-description {
      position: relative;
      padding: 15px 15px 15px 64px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 1.5;
      border-radius: 4px;
      &.app-alert-no-icon {
        padding: 15px;
      }
      .app-alert-description {
        display: block;
      }
    }
    &.app-alert-success {
      background-color: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    &.app-alert-info {
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
    }
    &.app-alert-warning {
      background-color: #fffbe6;
      border: 1px solid #ffe58f;
    }
    &.app-alert-error {
      background-color: #fff1f0;
      border: 1px solid #ffa39e;
    }
    .app-alert-message {
      color: rgba(0, 0, 0, 0.85);
    }
    .app-alert-description {
      display: none;
      font-size: 14px;
      line-height: 22px;
    }
  }
`
