import styled, { css } from 'styled-components'
import { SUCCESS_COLOR, WARNING_COLOR } from '../../consts'

export const ABase = css`
	color: BLUE;
	text-decoration: none;
	a:active  { }
	&:visited { color: BLUE }
	&:hover,
	&:focus,
	&:active  { color: RED;  }
	&:hover,
	a:active  { outline: 0; }
	&:hover   { }
	&:focus   { outline: thin dotted; }
	-webkit-transition: color 0.2s ease-in-out;
		 -moz-transition: color 0.2s ease-in-out;
			 -o-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
`

export const A = styled.a`
	${ABase}
	color: ${SUCCESS_COLOR};
	&:visited { color: ${SUCCESS_COLOR}; }
	&:hover,
	&:focus,
	&:active  { color: ${WARNING_COLOR};  }
`