import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Img, Figure, Figcaption, Map, Area } from '../../../media/images'
import image from '../../../media/temp/mueller_hut_t.jpg'

export default {
	title: "Media|Images/Image",
	parameters: {
		component: Img,
	},
	decorators: [withKnobs]
}

export const asImg = () => (
  <Img 
    src="https://via.placeholder.com/150"
    alt="Alt text"
    title="Title text"
  />
)

export const asFigure = () => (
  <Figure>
    <Img src="https://via.placeholder.com/150" alt="Macaque in the trees" />
    <Figcaption type="imagemap">A cheeky macaque, Lower Kintaganban River, Borneo.</Figcaption>
  </Figure>
)

export const asImageMap = () => (
  <>
		<Img 
			src={image}
			width="225" height="151" border="0"
			alt="Mueller Hut, Mount Cook, and I"
			useMap="#muellermap" />
		<Map 
			mapId="muellermap"
			mapName="muellermap">
			<Area 
				shape ="rect" 
				coords ="90,80,120,151"
				href="www.google.com"
				alt="Js Alert" />
			<Area 
				shape ="poly" 
				coords ="55,55,120,80,90,80,90,100,70,100,20,80,55,55"
				href ="www.google.com" 
				target="_blank"
				alt="Mount Cook" />
			<Area 
				shape="poly" 
				coords ="145,80,145,100,215,90,215,80,180,60,145,80"
				href ="www.yahoo.com" target="_blank"
				alt="Mueller Hut" />
		</Map>
		</>
)

