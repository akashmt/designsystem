import { createGlobalStyle  }  from 'styled-components';

// Temporary - delete this.. use AppContainer

export const Layout = createGlobalStyle `
	.App {
		header {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-content: center;
			align-items: center;
			height: auto;
			background: red;
			img { 
				max-height: 3.0rem; 
				margin-right: 1.5rem;
			}
			h1 {
				margin-right: 1.5rem;
			}
			p { }
		}
	}
`