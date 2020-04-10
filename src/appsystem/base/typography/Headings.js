import styled, { css } from 'styled-components'
/* export const SubHeadingBase = css`` */

export const HeadingsBase = css`
	margin: 0rem 0rem 1.5rem 0rem;
	font-weight: 300;
	letter-spacing: -.1rem;
`

export const H1 = styled.h1`
	${HeadingsBase}
	font-size: 4.6rem; 
	line-height: 1.2;
`

export const H2 = styled.h2`
	${HeadingsBase}
	font-size: 3.6rem; 
	line-height: 1.25;
`

export const H3 = styled.h3`
	${HeadingsBase}
	font-size: 2.8rem; 
	line-height: 1.30;
`

export const H4 = styled.h4`
	${HeadingsBase}
	font-size: 2.2rem; 
	line-height: 1.35; 
	letter-spacing: -.08rem;
`

export const H5 = styled.h5`
	${HeadingsBase}
	font-size: 1.8rem; 
	line-height: 1.50; 
	letter-spacing: -.05rem;
`

export const H6 = styled.h6`
	${HeadingsBase}
	font-size: 1.6rem; 
	line-height: 1.40; 
	letter-spacing: 0;
`