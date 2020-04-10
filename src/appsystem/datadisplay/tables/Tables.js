import styled, { css } from 'styled-components'

export const TableBase = css`
	border-spacing: 0;
	width: 100%;
	td,
	th {
		border-bottom: .1rem solid BLUE;
		padding: 1.2rem 1.5rem;
		text-align: left;
		&:first-child { padding-left: 0rem; }
		&:last-child { padding-right: 0rem;}
	}
`

export const Table = styled.table`
	${TableBase}

`