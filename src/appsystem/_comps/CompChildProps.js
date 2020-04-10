import React from 'react'
import styled, { css } from 'styled-components'

export const Code = ({ children }) => {
	return (
		<StyledDiv>
			{children}
		</StyledDiv>
	)
}

export const DivBase = css`
	background: BLACK;
	color: WHITE;
`

const StyledDiv = styled.div`
	${DivBase}
`