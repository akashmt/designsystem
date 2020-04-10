import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default class ReactAliceCarousel extends React.Component {
  state = {
    galleryItems: [1, 2, 3].map((i) => (<div class="item"><h1 key={i}>{i}</h1></div>)),
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 }
  }

  stagePadding = {
    paddingLeft: 30,
    paddingRight: 30,
  }

  render() {
    return (
      <StyledSlider className="">
        <h2>React Alice Carousel</h2>
        <AliceCarousel
        items={this.state.galleryItems}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        disableAutoPlayOnAction={true}
      />
      <hr/>
        <AliceCarousel
          duration={600}
          autoPlayInterval={3000}
          autoPlay={true}
          dotsDisabled={false}
          fadeOutAnimation={true}
          showSlideInfo={true}
          mouseDragEnabled={true}
          infinite={true}
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        >
          <div className="item"><h1>1</h1></div>
          <div className="item"><h1>2</h1></div>
          <div className="item"><h1>3</h1></div>
          <div className="item"><h1>4</h1></div>
          <div className="item"><h1>5</h1></div>
        </AliceCarousel>
      </StyledSlider>
    )
  }
}

const StyledSlider = styled.div`
  width: 800px;
  .item {
    background-color: #ddd;
    height: 170px;
    margin: 5px;
    h1 {
      margin: 0;
      height: 100%;
      text-align: center;
      color: #ccc;
    }
  }
`