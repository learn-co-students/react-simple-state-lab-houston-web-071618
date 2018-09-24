import React, { Component } from 'react';
// import { pattern1 } from './data.js'
import Cell from './Cell.js'

export default class Matrix extends Component {
  //
  // constructor(props) {
  //    super(props)
  //  }


  genRow = (vals) => (
    vals.map(val => <Cell value={val} /> ) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const arrayfill = new Array(10).fill('#f00')
    return (new Array(10).fill(arrayfill))
  })()
}
