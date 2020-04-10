import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class LegendOptionsChart extends Component {

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
          <h2>Legend Options Example</h2>
          <textarea
            cols="40"
            rows="15"
            ref={input => { this.legendOptsInput = input; }}
            defaultValue={JSON.stringify(this.state.legend, null, 2)}></textarea>
          <div>
            <button onClick={this.applyLegendSettings}>Apply legend settings</button>
          </div>
          <Pie data={this.state.chartData} legend={this.state.legend} redraw />
				</div>
			</div>
		)
	}
}

export default LegendOptionsChart
