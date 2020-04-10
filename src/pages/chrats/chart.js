import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChartdata } from '../../appsystem/modules/charts/datastore/actions/chartActions'

import { LineChart } from '../../appsystem/modules/charts'


export function Chart() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getChartdata())
  }, [dispatch]);

  const charts = useSelector(state => state.chartReducer.chartdata)

  console.log(charts)

	return (
    <>
      <LineChart chartData={charts} />
    </>
	)
}

export default Chart