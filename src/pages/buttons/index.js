import React from 'react'
import styled from 'styled-components'
import { Button } from '../../appsystem/actions/buttons'


export function ButtonsPage() {
	return (
		<section>
			<h2>Buttons</h2>
			<fieldset>
				<Button>Submit</Button>
			</fieldset>
		</section>
	)
}

const StyledFieldset = styled.fieldset`
	display: block;
	margin: 0rem 0rem 0rem 0rem;
	padding: 1rem 1rem 1rem 1rem;
	min-inline-size: min-content;
	border-style: none;
	border-color: transparent;
	border-image: none;
	border-width: .1rem;
	border-top: .1rem solid #F1F1F1;
	border-right: .1rem solid #F1F1F1;
	border-bottom: .1rem solid #F1F1F1;
	border-left: 0rem solid red;
`