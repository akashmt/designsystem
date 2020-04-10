import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class StackedGroupBarChart extends Component {

	state = {
    chartData: this.props.chartData,
    options: this.props.options
	}

	render(){
		return (
			
				<div className="Chart-stacked-bar">
					<Bar
            data={this.state.chartData}
            options={this.state.options}
					/>
				</div>
			
		)
	}
}

export default StackedGroupBarChart
