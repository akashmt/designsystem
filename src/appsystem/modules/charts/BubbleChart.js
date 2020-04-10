import React, { Component } from 'react'
import styled from 'styled-components'
import { Bubble } from 'react-chartjs-2'

class BubbleChart extends Component {

	state = {
		chartData: this.props.chartData
	}

	static defaultProps = {
		displayTitle: true,
	}

	render(){
		return (
			<StyledSection>
				<div className="Chart-bubble">
					<Bubble
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

export default BubbleChart

const StyledSection = styled.section`
	.Chart-bubble {
		width: 500px;
	}
`
