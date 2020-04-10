import React from 'react'
import styled, { css } from 'styled-components'
import { Figure, Figcaption, Map, Area, Img } from './images'
import image from './temp/mueller_hut_t.jpg'

export const ImageMap = () => {
	return (
		<>
		<Img 
			src={image}
			width="225" height="151" border="0"
			alt="Mueller Hut, Mount Cook, and I"
			usemap="#muellermap" />
		<Map 
			id="muellermap"
			name="muellermap">
			<Area 
				shape ="rect" 
				coords ="90,80,120,151"
				href="javascript:alert('It works');"
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
}