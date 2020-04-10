import styled, { css } from 'styled-components'

export const Text = styled.p`
	color: green;
	margin: 0rem 0rem 1rem 0rem;
	&:last-of-type { margin-bottom: 0; }
`

export const TextLead = styled(Text)`
	font-style: italic;
	color: purple;
`