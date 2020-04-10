import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class VerticalBarChart extends Component {

	state = {
    chartData: this.props.chartData,
    width: this.props.width,
    height: this.props.height,
    options: this.props.options
	}

	static defaultProps = {
		displayTitle: true,
	}

	render(){
		return (
			
				<div className="Chart-vertical-bar">
					<Bar
            data={this.state.chartData}
            width={this.state.width}
            height={this.state.height}
            options={this.state.options}
					/>
				</div>
			
		)
	}
}

export default VerticalBarChart
