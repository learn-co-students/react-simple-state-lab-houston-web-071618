import React, { Component } from 'react';

export default class Cell extends Component {

// what does cell need to display the cell color? values
  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: this.props.value
    }
  }

  colorChange = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorChange}>
      </div>
    )
  }
}
