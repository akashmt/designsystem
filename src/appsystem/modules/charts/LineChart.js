import React, { Component } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

class LineChart extends Component {

	state = {
		chartData: this.props.chartData
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
		locations: 'City'
	}

	render(){
		return (
			<StyledSection>
				<div className="Chart-line">
					<Line
						data={this.state.chartData}
						options={{ 
							title: {
								display: this.props.displayTitle,
								text: 'Largest Cities in ' + this.props.location,
								fontSize: 25
							},
							legend: {
								display: this.props.displayLegend,
								position: this.props.legendPosition,
								labels: {
									fontColor: '#000000'
								}
							},
							layout: {
								padding: {
									left: 50,
									right: 0,
									top: 0,
									bottom: 0
								}
							},
							tooltips: {
								enabled: true
							}
						}}
					/>
				</div>
			</StyledSection>
		)
	}
}

export default LineChart

const StyledSection = styled.section`
	.Chart-line {
		width: 500px;
	}
`
