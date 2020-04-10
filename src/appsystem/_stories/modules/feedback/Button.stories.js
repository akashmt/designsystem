import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Button } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/Buttons",
	parameters: {
		component: Button,
	},
	decorators: [withKnobs]
}

export const asButton = () => (
  <>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </>
)

export const asButtonBlock = () => (
  <>
     <Button type="primary" block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type="dashed" block>
        Dashed
      </Button>
      <Button type="danger" block>
        Danger
      </Button>
      <Button type="link" block>
        Link
      </Button>
  </>
)


export const asButtonDisabled = () => (
  <Button type="primary" disabled>Primary</Button>
)

