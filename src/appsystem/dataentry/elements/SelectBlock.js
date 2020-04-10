import React from 'react'
import styled from 'styled-components'

export const SelectBlock = props => {
  const { input, handleChange } = props
	return (
    <StyledDiv className="form-group">
			<label htmlFor={input.HtmlFor} className="form-label">
				{input.Label}
			</label>
      <select 
        id={input.Id} 
        name={input.Name} 
        multiple={input.MultipleValue}
        defaultValue={input.CurrentValue}
        onChange={e => handleChange(e)} 
        required={input.IsRequired}>
          {input.ValueList.map((o,index) => {
            if(o.OptGroupLabel) {
              return (
                <React.Fragment key={index}>
                <optgroup label={o.OptGroupLabel}></optgroup>
                {o.OptGroupValues.map((OptGroupValue) => {
                  return (
                    <option key={OptGroupValue.key} value={OptGroupValue.value}>{OptGroupValue.key}</option>
                  )
                })}
                </React.Fragment>
              )
            } else {
            return (
              <option key={o.key} value={o.value}>{o.key}</option>
            )
            }
          })
        }
			</select>
		</StyledDiv>
	)
}


const StyledDiv = styled.div`
	label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
	select {
		margin-bottom: 15px;
		padding: 5px; 
		background: #ccc; 
		border: 0;
		color: white;
	}
`
