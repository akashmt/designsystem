import React from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";
import SlideTransition from './SlideTransition'

import styled from 'styled-components'


class SlideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: []
    }
    this.navUp = this.navUp.bind(this);
  }

  navUp() {
    this.setState({path: this.state.path.slice(0, -1)})
  }
  navDown(index) {
    this.setState({path: this.state.path.concat(index)})
  }
  render() {
    const {path} = this.state
    // console.log(path)
    const items = path.reduce(function(items, key) {
      return items[key].children
    }, this.props.data)

    return (
      <Router>
        <StyledSlideMenu className="browser">
          <h2>{this.props.title}</h2>
          <h3>{path.length > 0 ? <Link to="/#" onClick={this.navUp}>← Back</Link> : 'Home'}</h3>
          <SlideTransition depth={path.length} className="items-container">
            {items.map(function(item, index) {
              if (item.children) {
                return <Link to="/#" className="item" onClick={e => this.navDown(index)} key={item.name}>{item.name}</Link>
              } else {
                return <div className="item" key={item.name}>{item.name}</div>
              }
            }.bind(this))}
          </SlideTransition>
        </StyledSlideMenu>
      </Router>
    )
  }
}

export default SlideMenu

const StyledSlideMenu = styled.div`
  padding: 15px;
  a {
    display: block;
    cursor: pointer;
  }
  .items-container {
    max-width: 20rem;
    border: 2px solid #000;
    border-radius: .25rem;
  }
  .item {
    padding: .25rem .5rem;
    background: linear-gradient(to right, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
  }
  a.item:after {
    content: '→';
    float: right;
  }
  a.item:hover { background: #eee; }

  /* Generic slider styles */
  .slider-outer-wrapper {
    position: relative;
    overflow: hidden;
    transition: max-height .2s ease-in;
  }
  .slider-transition-group {
    width: 100%;
    overflow: hidden;
  }
  .slider-inner-wrapper {
    width: 100%;
    float: right;
    transition: all .2s ease-in-out;
    &:first-child { position: relative; }
  }
  .slider-right-enter { transform: translate3d(100%, 0, 0);}
  .slider-left-enter { transform: translate3d(-100%, 0, 0); }
  .slider-right-enter-active,
  .slider-left-enter-active,
  .slider-right-exit,
  .slider-left-exit { transform: translate3d(0, 0, 0); }
  .slider-right-exit-active { transform: translate3d(-100%, 0, 0); }
  .slider-left-exit-active { transform: translate3d(100%, 0, 0); }
`