import React from "react"
import styled from 'styled-components'

const InputBlock = props => {
  const { input, handleChange } = props
	return (
		<StyledDiv className="form-group">
			<label htmlFor={input.HtmlFor} className="form-label">
				{input.Label}
			</label>
			<input
				id={input.Id}
				name={input.Name}
        type={input.Type}
        defaultValue={input.DefaultValue}
        min={input.Min}
        max={input.Max}
        maxLength={input.Maxlength}
        step={input.Step}
        placeholder={input.Placeholder}
        pattern={input.Pattern}
        required={input.IsRequired}
        src={input.Src}
        readOnly={input.ReadOnly}
        size={input.Size}
        disabled={input.Disabled}
        onChange={e => handleChange(e)}
			/>
		</StyledDiv>
	)
}

export default InputBlock

const StyledDiv = styled.div`
	label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
	input {
		margin-bottom: 15px;
		padding: 5px; 
		background: #ccc; 
		border: 0;
		color: white;
	}
`