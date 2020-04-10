import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChartdata } from '../datastore/actions/chartActions'
import { Line } from 'react-chartjs-2'

export function LineChart(props) {

  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getChartdata())
  }, [dispatch]);

  let charts = useSelector(state => state.chartReducer.chartdata)

  if(props.chartData) {
    charts = props.chartData
  }

  return (
    <div>
      {charts && charts.map((chart) => {
        if(chart.type === 'line') {
          return (
            <div className="Chart-line">
              <Line data={chart} />
            </div>
          )
        }
      })}
    </div>
  )
}

export default LineChart

