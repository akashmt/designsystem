import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { TextareaBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Textarea",
	parameters: {
		component: TextareaBlock,
	},
	decorators: [withKnobs]
}

export const asTextarea = () => (
  <TextareaBlock input={
    {
      "Id": "question9",
      "Label": "What is your Bio?",
      "Name": "question9",
      "Placeholder": "Add Bio here",
      "HtmlFor": "question9",
      "DefaultValue": "test"
    }
  }/>
)

export const asTextareaRowsCols = () => (
  <TextareaBlock input={
    {
      "Id": "question9",
      "Label": "What is your Bio?",
      "Name": "question9",
      "Placeholder": "Add Bio here",
      "HtmlFor": "question9",
      "Rows": 4,
      "Cols": 50
    
    }
  }/>
)


export const asTextareaMaxlength = () => (
  <TextareaBlock input={
    {
      "Id": "question9",
      "Label": "What is your Bio?",
      "Name": "question9",
      "Placeholder": "Add Bio here",
      "HtmlFor": "question9",
      "DefaultValue": "test",
      "Maxlength": 50,
    }
  }/>
)

export const asTextareaReadonly = () => (
  <TextareaBlock input={
    {
      "Id": "question9",
      "Label": "What is your Bio?",
      "Name": "question9",
      "Placeholder": "Add Bio here",
      "HtmlFor": "question9",
      "DefaultValue": "test",
      "Readonly": true
    }
  }/>
)