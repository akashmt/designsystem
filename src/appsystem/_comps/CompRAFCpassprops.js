import React from 'react'
import styled, { css } from 'styled-components'

export const Figcaption = ({ children, type }) => {
	return (
		<StyledFigcaption type={type}>
			{children}
		</StyledFigcaption>
	)
}

export const StyledFigcaption = styled.figcaption`
	${props => props.type == 'cancel' && 'background-color: tomato;'}
`

/*** Example usage
<Figcaption type='cancel'>Hello!</Figcaption>
*/