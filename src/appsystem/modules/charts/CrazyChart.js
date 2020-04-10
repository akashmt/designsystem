import React, { Component } from 'react'
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2'
import color from 'rcolor';

class CrazyChart extends Component {

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
			newDataSet.backgroundColor = color();
			newDataSet.borderColor = color();
			newDataSet.hoverBackgroundColor = color();
			newDataSet.hoverBorderColor = color();

			var newState = {
				..._this.props.chartData,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	}



	render(){
		return (
			<StyledSection>
				<div className="Chart-crazy">
          <Bar 
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

export default CrazyChart

const StyledSection = styled.section`
	.Chart-crazy {
		width: 500px;
	}
`
