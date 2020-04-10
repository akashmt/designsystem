import React from 'react'
import styled, { css } from 'styled-components'
import { Area } from './index'

export const Map = ({ mapId, mapName, children }) => {
	return (
		<map 
			id={mapId}
			name={mapName}
		>
			{children}
		</map>
	)
}

const StyledMap = styled.map`
	
`