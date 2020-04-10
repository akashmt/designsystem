import React from 'react'
import styled, { css } from 'styled-components'

export const Blockquote = ({ children, ...props }) => {
	return (
		<StyledBlockquote>
			<q><span>{children}</span></q>
			<footer>
				<cite>~ James Hetfield | <a href="#">Metallica</a></cite>
			</footer>
		</StyledBlockquote>
	)
}

const StyledBlockquote = styled.blockquote`
	margin: 0rem 0rem 1.5rem 0rem;
	padding: 1.5rem;
	border-left: .3rem solid PURPLE;
	background: #f1f1f1;

	&:last-child {
		margin-bottom: 0rem;
	}

	q { 
		font-size: 3rem; 
		span { font-size: 1.6rem;  }
	}
	p { }
	cite { }
	a { &:hover {} }
`