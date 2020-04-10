import React, { Component } from 'react';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ReactTinymce extends Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
   
    return (
      <StyledCustom>
        <Editor
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
         }}
         onChange={this.handleEditorChange}
       />
      </StyledCustom>
    )
  }
}

export default ReactTinymce

const StyledCustom = styled.div`  
 
`

