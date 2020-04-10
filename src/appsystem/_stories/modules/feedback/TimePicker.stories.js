import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { TimePicker } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/TimePicker",
	parameters: {
		component: TimePicker,
	},
	decorators: [withKnobs]
}

export const asBasicTimepicker = () => (
  <TimePicker />
)

export const asIntervalTimepicker = () => (
  <>
    <TimePicker hourStep={1} minuteStep={15} secondStep={10} /> <br/><br/>
    <TimePicker disabled hourStep={1} minuteStep={15} secondStep={10} /> <br/><br/>
  </>
)

export const asFormatTimepicker = () => (
  <>
    <TimePicker format='HH:mm' /> <br/>

    <TimePicker use12Hours format="h:mm:ss A" />    
  </>
)
