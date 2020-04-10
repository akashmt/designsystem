import { createGlobalStyle  }  from 'styled-components';
import { FONTBASE, FONT_SIZE, FONT_WEIGHT, FONT_LETTER_SPACING, FONT_LINE_HEIGHT,
				 FONTFAMILY_HEADER, FONTFAMILY_SUBHEADER, 
				 FONTFAMILY_TEXT, FONTFAMILY_HANDWRITING,
				 FONT_HEADER, FONT_SUBHEADER,
				 FONT_TEXT, FONT_HANDWRITING } from '../../consts'
import { DARK_COLOR } from '../../consts'

export const Typography = createGlobalStyle `
	@import url(${FONTFAMILY_HEADER});
	@import url(${FONTFAMILY_SUBHEADER});
	@import url(${FONTFAMILY_TEXT});
	@import url(${FONTFAMILY_HANDWRITING});

	html { 
		font-size: ${FONTBASE};
	}

	body { 
		color: ${DARK_COLOR};
		/* 1.6em Currently ems bc chrome bug misinterpreting rems on body element */
		font-size: ${FONT_SIZE};
		font-family: ${FONT_TEXT};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: ${FONT_WEIGHT};
		letter-spacing: ${FONT_LETTER_SPACING};
		line-height: ${FONT_LINE_HEIGHT};
	}

	h1 { font-size: 4.6rem; line-height: 1.2; font-family: ${FONT_HEADER}; }
	h2 { font-size: 3.6rem; line-height: 1.25; font-family: ${FONT_SUBHEADER};}
	h3 { font-size: 2.8rem; line-height: 1.30; }
	h4 { font-size: 2.2rem; line-height: 1.35; letter-spacing: -.08rem; }
	h5 { font-size: 1.8rem; line-height: 1.50; letter-spacing: -.05rem; }
	h6 { font-size: 1.6rem; line-height: 1.40; letter-spacing: 0; }

	p {
		margin-bottom: 1.5rem;
		font-family: ${FONT_TEXT};
		.lead { font-family: ${FONT_HANDWRITING}; }
		&:last-of-type { margin-bottom: 0rem; }
	}

	small { }

	strong { font-weight: bold }
	b { }

	em { }
	i { } /* Use for I cons */

	strike, s { }
	u { } /* Underline */

	mark { } /* Marked Text/Highlight */

	del { } /* Blocks of text that are deteled from use */

	ins { } /* Inserted Text */

	address { }

	time { } /* reference: https://www.w3schools.com/tags/att_time_datetime.asp */

`;