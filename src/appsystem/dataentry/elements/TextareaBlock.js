import React from "react"
import styled from 'styled-components'

export const TextareaBlock = props => {
  const { input, handleChange } = props
	return (
		<StyledDiv className="form-group">
			<label htmlFor={input.HtmlFor} className="form-label">
				{input.Label}
			</label>
			<textarea
				id={input.Id}
				name={input.Name}
        type={input.Type}
        defaultValue={input.DefaultValue}
        rows={input.Rows}
        cols={input.Cols}
        maxLength={input.Maxlength}
        placeholder={input.Placeholder}
        readOnly={input.Readonly}
        required={input.IsRequired}
        onChange={e => handleChange(e)}
			/>
		</StyledDiv>
	)
}


const StyledDiv = styled.div`
	label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
	textarea {
		margin-bottom: 15px;
		padding: 5px; 
		background: #ccc; 
		border: 0;
		color: white;
	}
`