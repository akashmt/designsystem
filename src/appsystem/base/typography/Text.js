import styled, { css } from 'styled-components'

export const Text = styled.p`
	margin: 0rem 0rem 1rem 0rem;
	&:last-of-type { margin-bottom: 0rem; }
`

export const TextLead = styled(Text)`
	font-style: italic;
`

export const TextLarge = styled(Text)`
	font-size: 2.2rem;
`

export const TextMedium = styled(Text)`
	font-size: 1.6rem;
`

export const TextSmall = styled.small`
	font-size: 1rem;
`