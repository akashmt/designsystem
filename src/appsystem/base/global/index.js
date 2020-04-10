import React from 'react'
import { Normalize } from './Normalize'
import { HtmlBody } from './HtmlBody'
import { Layout } from './Layout'
import { Typography } from './Typography'
import { Images } from './Images'

export function GlobalStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
			<Layout/>
			<Typography/>
			<Images/>
		</React.Fragment>
	)
}

export default GlobalStyles