import React, { Component } from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'

class DoughnutChart extends Component {

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
				<div className="Chart-doughnut">
					<Doughnut 
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

export default DoughnutChart

const StyledSection = styled.section`
	.Chart-doughnut {
		width: 500px;
	}
`
