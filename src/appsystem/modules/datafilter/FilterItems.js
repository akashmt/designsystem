import React, { Component } from 'react'

export default class FilterItems extends Component {
  render() {
    return (
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">{item.name}</div>
        )
      })}
      </div>
    )
  }
}