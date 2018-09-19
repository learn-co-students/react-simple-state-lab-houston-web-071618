import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      color: this.props.value
    }
  }
  
  changeColor() {
    // debugger
    this.setState({color: '#333'})
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor.bind(this)}>
      </div>
    )
  }  
}

export default Cell