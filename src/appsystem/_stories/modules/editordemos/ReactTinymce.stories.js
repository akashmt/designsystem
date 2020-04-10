import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { ReactTinymce } from '../../../modules/editordemos'


export default {
	title: "Modules|EditorDemos/ReactTinymce",
	parameters: {
		component: ReactTinymce,
	},
	decorators: [withKnobs]
}

export const asReactTinymce = () => (
  <ReactTinymce />
)
