import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { FileTree } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/FileTree",
	decorators: [withKnobs]
}

export const asFileTree = () => (
  <FileTree 
    title="File Tree demo"
    data={
      [
        { id: 1, name: 'Estate', type: 'folder', path: [] },
        { id: 2, name:'persevering_concrete_teal.pdf', type: 'file', path: [1] },
        { id: 3, name: 'ivory_deliverables_computers.wav', type: 'file', path: [1] },
        { id: 4, name: 'xml_withdrawal.png', type: 'file', path: [1] },
        { id: 5, name: 'deposit', type: 'folder', path: [] },
        { id: 6, name: 'concrete.wav', type: 'file', path: [5] },
        { id: 7, name: 'frozen.m2v', type: 'file', path: [5] },
        { id: 8, name: 'auto_loan_account_engineer.mpe', type: 'file', path: [5] },
        { id: 9, name: 'Tajikistan', type: 'folder', collapsed: true, path: [] },
        { id: 10, name: 'synergize_mobility_smtp.m2a', type: 'file', collapsed: true, path: [9] },
        { id: 11, name: 'cotton.jpe', type: 'file', collapsed: true, path: [9] },
        { id: 12, name: 'soft_steel_international.mp4', type: 'file', collapsed: true, path: [9] },
        { id: 13, name: 'XSS', type: 'folder', path: [] },
        { id: 14, name: 'cross_platform.jpe', type: 'file', path: [13] },
        { id: 15, name: 'handmade_wooden_mouse.png', type: 'file', path: [13] },
        { id: 16, name: 'automotive_specialist_neural.html', type: 'file', path: [13] },
      ]
  } />
)
