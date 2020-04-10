import { createGlobalStyle  }  from 'styled-components';

export const HtmlBody = createGlobalStyle `
	*, 
	*::before, 
	*::after {
		box-sizing: inherit;
	}

	html { box-sizing: border-box; }

	html, body {
		margin: 0rem;
		padding: 0rem;
		position: relative;
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
`