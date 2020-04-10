import React, { Component } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

class RandomizedLineChart extends Component {


  componentWillMount(){
		this.setState(this.props.chartData);
  }
  
  componentDidMount(){

		var _this = this;

		setInterval(function(){
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for(var x=0; x< _this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;

			var newState = {
				..._this.props.chartData,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	}

	static defaultProps = {
		displayTitle: true,
	}

	render(){
		return (
			<StyledSection>
				<div className="Chart-random-line">
          <Line 
            data={this.state} 
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

export default RandomizedLineChart

const StyledSection = styled.section`
	.Chart-random-line {
		width: 500px;
	}
`
