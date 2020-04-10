import React, { Component } from 'react'
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2'

class MultiAxisBarChart extends Component {

	state = {
		chartData: this.props.chartData,
    options: this.props.options
	}


	render(){
		return (
      <div className="Chart-multi-axis-bar">
        <Bar
          data={this.state.chartData}
          options={this.state.options}
        />
      </div>
		)
	}
}

export default MultiAxisBarChart
