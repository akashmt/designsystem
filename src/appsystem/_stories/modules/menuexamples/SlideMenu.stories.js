import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { SlideMenu } from '../../../modules/menuexamples'


export default {
	title: "Modules|MenuExamples/Menu",
	decorators: [withKnobs]
}

export const asSlideMenu = () => (
  <SlideMenu 
    title="Menu Directional React Animations"
    data={
      [
        {name: 'Animal', children: [
          {name: 'Land', children: [
            {name: 'Cheetah'},
            {name: 'Ant'},
          ]},
          {name: 'Air', children: [
            {name: 'Eagle'},
          ]},
          {name: 'Water', children: [
            {name: 'Nessy'},
          ]},
        ]},
        {name: 'Vegetable', children: [
          {name: 'Broccoli'},
          {name: 'IE6'},
        ]},
        {name: 'Mineral', children: [
          {name: 'Granite'},
          {name: 'Uraninite'},
        ]},
      ]    
    }
  />
)
