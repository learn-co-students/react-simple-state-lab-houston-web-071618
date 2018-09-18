import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!

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
      values: ( () => {
        const defaultColor =  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
        return (new Array(10).fill(defaultColor))
      })()
    }




// {this.genRow()}  I think this goes somewhere...
