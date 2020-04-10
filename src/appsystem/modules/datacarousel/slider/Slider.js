import React, { Component } from "react";
import styled from 'styled-components'
import RSSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Slider extends Component {
  render() {
    
    const props = this.props
    const { children, title, settings } = props
    return (
      <StyledSlider>
        <h2>{title}</h2>
        <RSSlider {...settings}>
          {children}
        </RSSlider>
      </StyledSlider>
    );
  }
}

const StyledSlider = styled.div`
  h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`