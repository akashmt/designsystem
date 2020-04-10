import styled, { css } from 'styled-components'

export const ListBase = css`
	margin-top: 0;
	padding-left: 0;
	list-style: none;
`

export const UL = styled.ul`
	${ListBase}
	list-style: circle inside;
`

export const OL = styled.ol`
	${ListBase}
	list-style: decimal inside;
`

export const DL = styled.dl`
	${ListBase}
`