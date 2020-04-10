import React, { Component } from 'react'
import styled from 'styled-components'
import { Polar } from 'react-chartjs-2'

class PolarChart extends Component {

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
				<div className="Chart-polar">
					<Polar
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

export default PolarChart

const StyledSection = styled.section`
	.Chart-polar {
		//width: 500px;
	}
`
