import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { ReactWysiwyg } from '../../../modules/editordemos'


export default {
	title: "Modules|EditorDemos/ReactWysiwyg",
	parameters: {
		component: ReactWysiwyg,
	},
	decorators: [withKnobs]
}

export const asReactWysiwyg = () => (
  <ReactWysiwyg />
)
