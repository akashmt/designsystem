import React, { Component } from 'react'
import styled from 'styled-components'
import { HorizontalBar } from 'react-chartjs-2'

class HorizontalBarChart extends Component {

	state = {
		chartData: this.props.chartData,
    width: this.props.width,
    height: this.props.height,
    options: this.props.options
	}


	render(){
		return (
			<StyledSection>
				<div className="Chart-horigontal-bar">
					<HorizontalBar
						data={this.state.chartData}
					/>
				</div>
			</StyledSection>
		)
	}
}

export default HorizontalBarChart

const StyledSection = styled.section`
	.Chart-horigontal-bar {
		width: 500px;
	}
`
