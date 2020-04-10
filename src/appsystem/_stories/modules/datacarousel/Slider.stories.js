import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Slider } from '../../../modules/datacarousel'


export default {
	title: "Modules|Carousel/Demos",
	decorators: [withKnobs]
}

export const asSimpleSlider  = () => (
  <Slider title="Single Item" settings = {{dots: true,infinite: true,speed: 500,slidesToShow: 1,slidesToScroll: 1}}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
)

export const asMultipleItems   = () => (
  <Slider title="Multiple items" settings = {{dots: true,infinite: true,speed: 500,slidesToShow: 3,slidesToScroll: 3}}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
)

export const asFade   = () => (
  <Slider title="Fade" settings = {{dots: true,infinite: true,speed: 500,fade: true,slidesToShow: 1,slidesToScroll: 1}}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
)
