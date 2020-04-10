import React from 'react'
import { Provider } from 'react-redux'
import store from '../../appsystem/modules/charts/datastore/store'

import Chart from './chart'

export function ChartsPage() {
	return (
    <Provider store={store}>
      <section>
        <h2>Charts Demo</h2>
        <Chart />
      </section>
    </Provider>
	)
}