import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { AdvancedDemo } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/AdvancedSortableDemo",
	decorators: [withKnobs]
}

export const asAdvancedDemo = () => (
  <AdvancedDemo 
    title="Advanced Demo"
    data={
      [
        { id: 1, parentId: 0, name: 'listing1', index: 0 },
        { id: 2, parentId: 0, name: 'listing2', index: 1 },
        { id: 3, parentId: 2, name: 'listing3', index: 0 },
        { id: 4, parentId: 3, name: 'listing4', index: 0 },
        { id: 5, parentId: 0, name: 'listing5', index: 2 },
      ]
  } />
)
