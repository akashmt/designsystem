import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Table } from '../../../datadisplay/tables'

export default {
	title: "Data Display|Tables/Table",
	parameters: {
		component: Table,
	},
	decorators: [withKnobs]
}

export const asTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Height</th>
        <th>Location</th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <td>Stephen Curry</td>
          <td>27</td>
          <td>1,91</td>
          <td>Akron, OH</td>
        </tr>
        <tr>
          <td>Klay Thompson</td>
          <td>25</td>
          <td>2,01</td>
          <td>Los Angeles, CA</td>
        </tr>
      </tbody>
    </Table>
)


