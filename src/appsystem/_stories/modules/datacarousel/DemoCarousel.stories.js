import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { DemoCarousel } from '../../../modules/datacarousel'


export default {
	title: "Modules|Carousel/DemoCarousel",
	decorators: [withKnobs]
}

export const asDemoCarousel = () => (
  <DemoCarousel data={
    [
      {
        "value": 1,
        "name": "Ales Krasouski",
        "date": "12.5.2017",
        "serviceName": "kevytvahapesu"
      },
      {
        "value": 2,
        "name": "Esko Iso-Aho",
        "date": "12.5.2017",
        "serviceName": "kasinpesu"
      },
      {
        "value": 3,
        "name": "Drako",
        "date": "12.5.2017",
        "serviceName": "liuotinpesu"
      },
      {
        "value": 4,
        "name": "Name Fame",
        "date": "12.5.2017",
        "serviceName": "liuotinpesu"
      },
      {
        "value": 4,
        "name": "Name Fame",
        "date": "12.5.2017",
        "serviceName": "liuotinpesu"
      },
      {
        "value": 4,
        "name": "Name Fame",
        "date": "12.5.2017",
        "serviceName": "liuotinpesu"
      }
    ]
  } />
)
