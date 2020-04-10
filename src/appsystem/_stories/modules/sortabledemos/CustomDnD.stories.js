import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Block, List } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/Customs",
	decorators: [withKnobs]
}

export const asBlock = () => (
  <Block data={
    [
      {name:"Angular",category:"wip", bgcolor: "yellow"},
      {name:"React", category:"complete", bgcolor:"pink"},
      {name:"Vue", category:"wip", bgcolor:"skyblue"}
    ]
  }
  />
)

export const asList = () => (
  <List data={
    ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']
  } />
)
