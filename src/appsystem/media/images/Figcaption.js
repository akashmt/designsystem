import styled, { css } from 'styled-components'

export const FigcaptionBase = css`
	
`

export const Figcaption = styled.figcaption`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0.5rem;
	${props => props.type == 'imagemap' && 'background-color: green;'}
`