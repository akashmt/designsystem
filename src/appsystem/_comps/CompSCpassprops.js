import styled, { css } from 'styled-components'

export const FigcaptionBase = css`
	
`

export const Figcaption = styled.figcaption`
	${FigcaptionBase}
	${props => props.type == 'cancel' && 'background-color: green;'}
`

/*** Example usage
<Figcaption type='cancel'>Hello!</Figcaption>
*/