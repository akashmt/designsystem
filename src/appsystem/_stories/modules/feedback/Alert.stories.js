import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Alert } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/Alert",
	parameters: {
		component: Alert,
	},
	decorators: [withKnobs]
}

export const asAlert = () => (
  <>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
    <Alert message="Success Text" description="Success Description Success Description Success Description" type="success" />
  </>
)