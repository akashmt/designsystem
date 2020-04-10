import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { TableSortableRow } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/TableSortableRow",
	decorators: [withKnobs]
}

export const asTableSortableRow = () => (
  <TableSortableRow 
    title="Table Sortable Row"
    data={
      [
        { id: 1, name: "Dr. Kari Mayer", email: "Cristobal.Yost@hotmail.com", path: [] },
        { id: 2, name: "Jovanny Will", email: "Elton77@hotmail.com", path: [] },
        { id: 3, name: "Miss Myrtle Sporer", email: "Tomas66@yahoo.com", path: [] },
        { id: 4, name: "Mrs. Jessyca Funk", email: "Loyce.Schiller73@yahoo.com", path: [] },
        { id: 5, name: "Marietta Tillman", email: "Marty_Hahn93@hotmail.com", path: [] }
      ]
  } />
)
