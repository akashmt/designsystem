import React from 'react'
import styled from 'styled-components'

import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import LinkTool from '@editorjs/link'; 
import RawTool  from '@editorjs/raw'; 
import SimpleImage  from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote  from '@editorjs/quote';
import List from '@editorjs/list';



class EditorDemo extends React.Component {

  componentDidMount() {
    new EditorJS({ 
      /** 
       * Id of Element that should contain the Editor 
       */ 
      holder: 'codex-editor', 

      placeholder: 'Let`s write an awesome story!',

      autofocus: true,

       /**
       * This Tool will be used as default 
       */
      //initialBlock: "myOwnParagraph",

      /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */ 
      tools: { 
        header: {
          class: Header, 
          inlineToolbar: true
        }, 
        linkTool: {
          class: LinkTool,
          inlineToolbar: true
        },
        raw: {
          class: RawTool,
          inlineToolbar: true,
        },
        //image: SimpleImage,
        image: {
          class: ImageTool, 
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: { 
          class: List, 
          inlineToolbar: true 
        },
        embed: {
          class: Embed,
          inlineToolbar: true
        },
        quote: {
          class: Quote,
          inlineToolbar: true
        }
      },
      /**
        * onReady callback
        */
      onReady: () => {console.log('Editor.js is ready to work!')},
      
      /**
        * onChange callback
        */
      onChange: () => {console.log('Now I know that Editor\'s content changed!')},
      
      
    
    })
  }

  render() {
    return (
      <StyledCustom className="editor-style">
        <h2>Editor JS Demo</h2>
       <div id="codex-editor"></div>
      </StyledCustom>
    )
  }       
}
export default EditorDemo

const StyledCustom = styled.div`
  .codex-editor {
    border: 3px solid gray;
  }
`