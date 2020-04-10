import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Progress } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/ProgressDemo",
	parameters: {
		component: Progress,
	},
	decorators: [withKnobs]
}

export const asProgress = () => (
  <>
    <h2>Standard Progress Bar</h2>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    <br/>
    <br/>
    <h2>Circular Progress Bar</h2>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>
)

