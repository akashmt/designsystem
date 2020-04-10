import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { SimpleDemo } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/SimpleSortableDemo",
	decorators: [withKnobs]
}

export const asSimpleDemo = () => (
  <SimpleDemo 
    title="Simple sorting demo"
    data={
      [
        { id: 1, name: 'Priscilla Cormier', path: [] },
        { id: 2, name: 'Miss Erich Bartoletti', path: [] },
        { id: 3, name: 'Alison Friesen', path: [2] },
        { id: 4, name: 'Bernita Mayert', path: [2, 3] },
        { id: 5, name: 'Garfield Berge', path: [] },
      ]
  } />
)
