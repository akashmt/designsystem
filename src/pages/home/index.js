import React from 'react'
import styled from 'styled-components'

export function HomePage() {
	return (
		<section>
			<h2>Home</h2>
			<fieldset>
				<label htmlFor="">Button</label>
				<input type="text"/>
				<button>Submit</button>
			</fieldset>
		</section>
	)
}