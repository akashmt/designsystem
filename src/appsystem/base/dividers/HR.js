import styled, { css } from 'styled-components'

export const HRBase = css`
	margin: 3.0rem 0;
	border: 0;
	border-top: .1rem solid RED;
`

export const HR = styled.hr`
	${HRBase}
`