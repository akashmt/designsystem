import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { SelectBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Select",
	parameters: {
		component: SelectBlock,
	},
	decorators: [withKnobs]
}

export const asSelect = () => (
  <SelectBlock input={
    {
      "Id": "question8",
      "Component": "select",
      "Label": "Picklist (Select) Block Label",
      "Type": "Picklist",
      "Name": "question8",
      "IsRequired": false,
      "ValueList": [
        { "key": "Option1", "value": "something1" },
        { "key": "Option2", "value": "something2" },
        { "key": "Option3", "value": "something3" }
      ],
      "CurrentValue": "Option2",
      "MultipleValue": false
    }
  }/>
)

export const asSelectOptionGroup = () => (
  <SelectBlock input={
    {
      "Id": "question33",
      "Label": "OptionGroup Example",
      "Type": "Picklist",
      "Name": "question33",
      "IsRequired": false,
      "ValueList": [
        {
          "OptGroupLabel": "Australia",
          "OptGroupValues":[
            { "key": "Sydney", "value": "sydney" },
            { "key": "Melbourne", "value": "melbourne" }
          ]
        },
        {
          "OptGroupLabel": "New Zealand",
          "OptGroupValues":[
            { "key": "Cromwell", "value": "cromwell" },
            { "key": "Queenstown", "value": "queenstown" }
          ]
        }
      ],
      "CurrentValue": "Cromwell"
    }
  }/>
)