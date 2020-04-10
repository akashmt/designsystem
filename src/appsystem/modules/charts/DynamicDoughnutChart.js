import React, { Component } from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});

class DynamicDoughnutChart extends Component {

  state = {
    chartData: getState()
  }
  
  componentWillMount() {
		setInterval(() => {
			this.setState({chartData: getState()});
		}, 5000);
	}


	static defaultProps = {
		displayTitle: true
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

export default DynamicDoughnutChart

const StyledSection = styled.section`
	.Chart-pie {
		width: 500px;
	}
`
