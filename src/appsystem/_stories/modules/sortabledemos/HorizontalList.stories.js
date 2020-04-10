import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { HorizontalList } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/HorizontalList",
	decorators: [withKnobs]
}

export const asHorizontalList = () => (
  <HorizontalList 
    title="Horizontal List demo"
    data={
      [
        { id: 1, name: "Mrs. Stefan Beer", color: "#007a70", path: [] },
        { id: 2, name: "Clotilde Macejkovic", color: "#09432a", path: [] },
        { id: 3, name: "Jovanny Will", color: "#407e35", path: [] },
        { id: 4, name: "Miss Myrtle Sporer", color: "#7d5236", path: [] },
        { id: 5, name: "Mrs. Jessyca Funk", color: "#541d43", path: [] },
        { id: 6, name: "Curt Macejkovic", color: "#0a1578", path: [] },
        { id: 7, name: "Darby Stoltenberg", color: "#5f6211", path: [] },
        { id: 8, name: "Clair Price", color: "#675845", path: [] },
        { id: 9, name: "Layne Koss", color: "#793a6c", path: [] },
        { id: 10, name: "Shad Mills", color: "#2f2368", path: [] }
      ]
  } />
)
