import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import InputBlock from '../../../dataentry/elements/InputBlock'

export default {
	title: "DataEntry|Elements/Inputs",
	parameters: {
		component: InputBlock,
	},
	decorators: [withKnobs]
}

export const asInput = () => (
  <InputBlock input={
    {
      "Id": "question1",
      "Label": "What is your name?",
      "Type": "text",
      "Name": "question1",
      "HtmlFor": "question1"
    }
  }/>
)

export const asInputPlaceholder = () => (
  <InputBlock input={
    {
      "Id": "question1",
      "Label": "What is your name?",
      "Type": "text",
      "Name": "question1",
      "Placeholder": "Add name",
      "HtmlFor": "question1"
    }
  }/>
)

export const asInputDefaultValue = () => (
  <InputBlock input={
    {
      "Id": "question1",
      "Label": "What is your name?",
      "Type": "text",
      "Name": "question1",
      "HtmlFor": "question1",
      "DefaultValue": "akash"
    }
  }/>
)

export const asInputNumber = () => (
  <InputBlock input={
    {
      "Id": "question2",
      "Component": "input",
      "Label": "What is your age?",
      "Type": "number",
      "Name": "question2",
      "Placeholder": "Number Textbox",
      "HtmlFor": "question2",
      "Min": 18,
      "Max": 80
    }
  }/>
)

export const asInputPassword = () => (
  <InputBlock input={
    {
      "Id": "question3",
      "Label": "What is your password?",
      "Type": "password",
      "Name": "question3",
      "Placeholder": "Password Textbox",
      "HtmlFor": "question3"
    }
  }/>
)

export const asInputColor = () => (
  <InputBlock input={
    {
      "Id": "question4",
      "Label": "What is your favorite color?",
      "Type": "color",
      "Name": "question4",
      "Placeholder": "Color Textbox",
      "HtmlFor": "question4",
      "DefaultValue": "#ff0000"
    }
  }/>
)

export const asInputDate = () => (
  <InputBlock input={
    {
      "Id": "question5",
      "Label": "What is your birthdate?",
      "Type": "date",
      "Name": "question5",
      "HtmlFor": "question5"
    }
  }/>
)

export const asInputEmail = () => (
  <InputBlock input={
    {
      "Id": "question6",
      "Label": "What is your Email?",
      "Type": "email",
      "Name": "question6",
      "HtmlFor": "question6"
    }
  }/>
)

export const asInputUrl = () => (
  <InputBlock handleChange={action()} input={
    {
      "Id": "question7",
      "Label": "What is your Website URL?",
      "Type": "url",
      "Name": "question7",
      "HtmlFor": "question7"
    }
  }/>
)

export const asInputDateTimeLocal = () => (
  <InputBlock input={
    {
      "Id": "question12",
      "Label": "What is your birthdate?",
      "Type": "datetime-local",
      "Name": "question12",
      "HtmlFor": "question12"
    }
  }/>
)

export const asInputMonth = () => (
  <InputBlock input={
    {
      "Id": "question13",
      "Label": "What is your birthdate Month-Year?",
      "Type": "month",
      "Name": "question13",
      "HtmlFor": "question13"
    }
  }/>
)

export const asInputTime = () => (
  <InputBlock input={
    {
      "Id": "question14",
      "Label": "Select a time:",
      "Type": "time",
      "Name": "question14",
      "HtmlFor": "question14"
    }
  }/>
)

export const asInputWeek = () => (
  <InputBlock input={
    {
      "Id": "question15",
      "Label": "Select a week:",
      "Type": "week",
      "Name": "question15",
      "HtmlFor": "question15"
    }
  }/>
)

export const asInputFile = () => (
  <InputBlock input={
    {
      "Id": "question16",
      "Label": "Select a file:",
      "Type": "file",
      "Name": "question16",
      "HtmlFor": "question16"
    }
  }/>
)

export const asInputRange = () => (
  <InputBlock input={
    {
      "Id": "question18",
      "Label": "Select Range",
      "Type": "range",
      "Name": "question18",
      "HtmlFor": "question18",
      "Min": 1,
      "Max": 10,
      "Step": 1
    }
  }/>
)

export const asInputSearch = () => (
  <InputBlock input={
    {
      "Id": "question19",
      "Label": "Search Text",
      "Type": "search",
      "Name": "question19",
      "HtmlFor": "question19",
      "Placeholder": "googlesearch"
    }
  }/>
)

export const asInputPhone = () => (
  <InputBlock input={
    {
      "Id": "question20",
      "Label": "Add Telephone",
      "Type": "tel",
      "Name": "question20",
      "HtmlFor": "question20",
      "Placeholder": "Format: 123-45-678",
      "Pattern": "[0-9]{3}-[0-9]{2}-[0-9]{3}"
    }
  }/>
)

export const asInputReadonly = () => (
  <InputBlock input={
    {
      "Id": "question24",
      "Label": "Readonly Text Box",
      "Type": "text",
      "Name": "question24",
      "HtmlFor": "question24",
      "DefaultValue": "akash",
      "ReadOnly": true
    }
  }/>
)

export const asInputDisabled = () => (
  <InputBlock input={
    {
      "Id": "question25",
      "Component": "input",
      "Label": "Disable Text Box",
      "Type": "text",
      "Name": "question25",
      "HtmlFor": "question25",
      "Disabled": true
    }
  }/>
)

export const asInputSize = () => (
  <InputBlock input={
    {
      "Id": "question26",
      "Label": "Size attribute Text Box",
      "Type": "text",
      "Name": "question26",
      "HtmlFor": "question26",
      "Size": 40
    }
  }/>
)

export const asInputMaxlength = () => (
  <InputBlock input={
    {
      "Id": "question27",
      "Label": "Maxlength attribute Text Box",
      "Type": "text",
      "Name": "question27",
      "HtmlFor": "question27",
      "Maxlength": 10
    }
  }/>
)

