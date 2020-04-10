import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { ProgressBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Progress",
	parameters: {
		component: ProgressBlock,
	},
	decorators: [withKnobs]
}

export const asProgress = () => (
  <ProgressBlock input={
    {
      "Id": "question32",
      "Component": "progress",
      "Name": "question32",
      "Label": "Downloading Progress example",
      "Max": "100",
      "DefaultValue": 30
    }
  }/>
)

