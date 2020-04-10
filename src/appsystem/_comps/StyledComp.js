import React from 'react'
import styled, { css } from 'styled-components'

export const Code = () => {
	return (
		<StyledDiv>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos!</p>
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