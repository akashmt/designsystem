import React from "react"
import styled from 'styled-components'

export const RadioBlock = props => {
  const { input, handleChange } = props
	return (
		<StyledDiv className="form-group form-group-radio">
			<label className="form-label">
				{input.Label}
			</label>
      {input.ValueList.map((option) => {
        return (
          <div key={option.key} className="radio-label">
            <input
              id={option.key}
              name={input.Name}
              type={input.Type}
              value={option.value}
              onChange={e => handleChange(e)}
            /> 
            <label htmlFor={option.key}>{option.value}</label>
          </div>
        )
      })}
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
  margin-bottom: 15px;
  label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
  .radio-label label { display: inline-block; }
`