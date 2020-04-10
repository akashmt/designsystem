import React from 'react'
import moment from 'moment';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { DatePicker, MonthPicker, RangePicker, WeekPicker } from '../../../modules/feedback'

const now = moment();

export default {
	title: "Modules|Feedback/Calender",
	parameters: {
		component: DatePicker,
	},
	decorators: [withKnobs]
}

export const asDatePicker = () => (
  <DatePicker />
)

export const asMonthPicker = () => (
  <MonthPicker defaultValue={now} placeholder="Select month" />
)

export const asRangePicker = () => (
  <RangePicker />
)

export const asWeekPicker = () => (
  <WeekPicker />
)

