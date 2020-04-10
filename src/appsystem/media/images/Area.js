import React from 'react'
import styled, { css } from 'styled-components'

export const Area = ({ shape, coords, href, target, alt }) => {
	return (
		<area 
			shape={shape}
			coords={coords}
			href={href}
			target={target}
			alt={alt}
		/>
	)
}

const StyledArea = styled.area`
	
`