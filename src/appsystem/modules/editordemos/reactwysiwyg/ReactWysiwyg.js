import React, { Component } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ReactWysiwyg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <StyledCustom>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </StyledCustom>
    )
  }
}

export default ReactWysiwyg

const StyledCustom = styled.div`  
  height: 100%;
  .wrapperClassName {
    border: 1px solid gray;
    height: 100%;
  }
  .editorClassName {
    height: auto;
    padding: 15px;
  }
`

