import React from 'react'
import styled, { css } from 'styled-components'

export const Code = ({ children }) => {
	return (
		<StyledPre>
			<StyledCode>
				{children}
			</StyledCode>
		</StyledPre>
	)
}

const StyledPre = styled.pre`
	background: BLACK;
	border-left: .3rem solid GREEN;
	overflow-y: hidden;
	& > code {
		border-radius: 0;
		display: block;
		padding: 1rem 1.5rem;
		white-space: pre;
	}
`
const StyledCode = styled.code`
	margin: 0rem .2rem 0rem .2rem;
	padding: .2rem .5rem .2rem .5rem;
	color: WHITE;
	font-size: 1.4rem;
	white-space: nowrap;
	border-radius: .4rem;
`
