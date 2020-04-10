import React, { Component } from 'react'
import styled from 'styled-components'
import { Radar } from 'react-chartjs-2'

class RadarChart extends Component {

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
				<div className="Chart-radar">
					<Radar
						data={this.state.chartData}
						options={{ 
							title: {
								display: this.props.displayTitle,
								text: this.props.displayTitle,
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

export default RadarChart

const StyledSection = styled.section`
	.Chart-radar {
		//width: 500px;
	}
`
