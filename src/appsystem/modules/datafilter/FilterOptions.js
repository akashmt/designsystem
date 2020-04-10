import React, { Component } from 'react'

export default class FilterOptions extends Component {
  changeOption(type, e) {
    var val = e.target.value
    this.props.changeOption(val, type)
  }

  render() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>Bender</label>
          <select id="bender" value={this.props.bender} onChange={this.changeOption.bind(this, 'bender')}>
            <option value=""></option>
            {this.props.benderOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
          </select>
          <label>Nation</label>
          <select id="nation" value={this.props.nation} onChange={this.changeOption.bind(this, 'nation')}>
            <option value=""></option>
            {this.props.nationOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
          </select>
          <label>Person</label>
          <select id="person" value={this.props.person} onChange={this.changeOption.bind(this, 'person')}>
            <option value=""></option>
            {this.props.personOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
          </select>
          <label>Show</label>
          <select id="show" value={this.props.show} onChange={this.changeOption.bind(this, 'show')}>
            <option value=""></option>
            {this.props.showOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
          </select>
        </div>
      </div>
    )
  }
}