import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css' 

const DemoCarousel = props => {
    const responsive = {
      0: { items: 1 },
      1024: { items: 4 },
    }

    return (
      <StyledCustom className="carousel-style">
        <h2>Simple Data Carousel Demo</h2>
        <AliceCarousel 
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
        >
          {
            props.data.map((item, index) => {
              return (
                <div className="item" key={index.value}>
                    <div className="item-content">
                      <h3>{item.name}</h3>
                      <p>{item.date}</p>
                      <h4>{item.serviceName}</h4>
                    </div>
                </div>
              );
              
            })
          }
        </AliceCarousel>
      </StyledCustom>
    )
}
export default DemoCarousel

const StyledCustom = styled.div`
   width: 800px;
  .item-content {
    text-align: center
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    h4 {
      font-size: 16px;
    }
  }
`