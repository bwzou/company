import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className="menu">
        {this.props.children}
      </div>
    )
  }
}