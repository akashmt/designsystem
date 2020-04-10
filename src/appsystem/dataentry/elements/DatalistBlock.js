import React from "react"
import styled from 'styled-components'

export const DatalistBlock = props => {
  const { input, handleChange } = props
	return (
		<StyledDiv className="form-group form-group-checkbox">
			<label className="form-label">
				{input.Label}
			</label>
      <input
				list={input.Id}
				name={input.Name}
        type={input.Type}
        onChange={e => handleChange(e)}
			/>
      <datalist id={input.Id}>
        {input.ValueList.map((option) => {
          return (
            <option key={option.key} value={option.value} />
          )
        })}
      </datalist>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
  margin-bottom: 15px;
  label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
`