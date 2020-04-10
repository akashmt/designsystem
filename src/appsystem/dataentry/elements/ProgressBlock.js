import React from "react"
import styled from 'styled-components'

export const ProgressBlock = props => {
  const { input } = props
	return (
		<StyledDiv className="form-group form-group-checkbox">
			<label className="form-label">
				{input.Label}
			</label>
      <progress value={input.DefaultValue} max={input.Max}>
        <span id={input.Id}>{input.DefaultValue}</span>%
      </progress>
     
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
  margin-bottom: 15px;
  label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
`