import React from "react"
import styled from 'styled-components'

export const MeterBlock = props => {
  const { input } = props
	return (
		<StyledDiv className="form-group form-group-checkbox">
			<label className="form-label">
				{input.Label}
			</label>
      <meter 
        min={input.Min} 
        max={input.Max} 
        value={input.DefaultValue} 
        title={input.Name}
        low={input.Low}
        high={input.High}
        optimum={input.Optimum}
      >
          {input.DefaultValue}
        </meter>
     
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
  margin-bottom: 15px;
  label { display: block; text-transform: capitalize; font-size: .8rem; color: grey; }
`