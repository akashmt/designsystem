import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { UL, OL, DL } from '../../../datadisplay/lists'

export default {
	title: "Data Display|Lists/List",
	parameters: {
		component: UL,
	},
	decorators: [withKnobs]
}

export const asUl = () => (
	  <UL>
      <li>List Item1</li>
      <li>List Item2</li>
    </UL>
)

export const asOl = () => (
  <OL>
    <li>Order Item1</li>
    <li>Order Item2</li>
  </OL>
)

export const asDl = () => (
  <DL>
    <dt><dfn>Definition List</dfn></dt>
      <dd>A list of terms and their definitions/descriptions.</dd>
    <dt><dfn>Ordered List</dfn></dt>
      <dd>A numbered list.</dd>
    <dt><dfn>Unordered List</dfn></dt>
      <dd>An unnumbered list.</dd>
  </DL>
)

