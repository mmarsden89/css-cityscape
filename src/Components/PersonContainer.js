import React, { Component } from 'react'
import Person from './Person'


class PersonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = () => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x + 3.5})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }


  render() {
    return (
        <div style={{left: `${this.state.x}px`}}
          className="personcontainer" onScroll={this.handleScroll}>
          <Person x={100} arms={'blue'} bottom={'darkblue'} y={1} color={'rgb(166, 147, 130)'}/>
          <Person x={1100} arms={'white'} bottom={'green'} y={3} color={'rgb(52, 30, 10)'}/>
        </div>
    );
  }
}

export default PersonContainer
