import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { EditorJS } from '../../../modules/editordemos'


export default {
	title: "Modules|EditorDemos/EditorJS",
	parameters: {
		component: EditorJS,
	},
	decorators: [withKnobs]
}

export const asEditorJS = () => (
  <EditorJS />
)
