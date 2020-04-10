import React, { Component } from 'react'
import styled from 'styled-components'
import { Scatter } from 'react-chartjs-2'

class ScatterChart extends Component {

	state = {
		chartData: this.props.chartData
	}

	static defaultProps = {
		displayTitle: true,
	}

	render(){
		return (
			<StyledSection>
				<div className="Chart-scatter">
					<Scatter
						data={this.state.chartData}
						options={{ 
							title: {
								display: this.props.displayTitle,
								text: this.props.displayTitle,
								fontSize: 25
							}
						}}
					/>
				</div>
			</StyledSection>
		)
	}
}

export default ScatterChart

const StyledSection = styled.section`
	.Chart-scatter {
		width: 500px;
	}
`
