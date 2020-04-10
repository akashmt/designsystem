import styled, { css } from 'styled-components'

{/*  <Brew coding/> <Talking devs/> <Viewify app/> */}

export const ButtonBase = css`
	background-color: BLUE;
	border: .1rem solid BLUE;
	border-radius: .4rem;
	color: WHITE;
	cursor: pointer;
	display: inline-block;
	font-size: 1.2rem;
	font-weight: 700;
	height: 3.8rem;
	letter-spacing: .1rem;
	line-height: 3.8rem;
	padding: 0 3.0rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;
	&:focus,
	&:hover {
		background-color: RED;
		border-color: RED;
		color: WHITE;
		outline: 0;
	}
	&[disabled] {
		cursor: default;
		opacity: .5;
		&:focus,
		&:hover {
			background-color: PURPLE;
			border-color: PURPLE;
		}
	}
	&.button-outline {
		background-color: transparent;
		color: BLUE;
		&:focus,
		&:hover {
			background-color: transparent;
			border-color: RED;
			color: RED;
		}
		&[disabled] {
			&:focus,
			&:hover {
				border-color: inherit;
				color: BLUE;
			}
		}
	}
	&.button-clear {
		background-color: transparent;
		border-color: transparent;
		color: BLUE;
		&:focus,
		&:hover {
			background-color: transparent;
			border-color: transparent;
			color: RED;
		}
		&[disabled] {
			&:focus,
			&:hover {
				color: BLUE;
			}
		}
	}
`

export const Button = styled.button`
	${ButtonBase}
`

export const Input = styled.input`
	&[type='button'],
	&[type='reset'],
	&[type='submit'] {
		${ButtonBase}
	}
`