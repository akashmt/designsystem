import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class LegendHandlersChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.chartData,
      legend: this.props.legend
    };
    this.applyLegendSettings = this.applyLegendSettings.bind(this);
  }
  
  applyLegendSettings() {
    const { value } = this.legendOptsInput;

    try {
      const opts = JSON.parse(value);
      this.setState({
        legend: opts
      });
    } catch(e) {
      alert(e.message);
      throw Error(e);
    }
  }

	render(){
		return (
			<div>
				<div className="Chart-legend-options">
        <h2>Legend Handlers Example</h2>
        <p>Hover over label and click</p>
        <Pie data={this.state.chartData} legend={this.state.legend} />
				</div>
			</div>
		)
	}
}

export default LegendHandlersChart
