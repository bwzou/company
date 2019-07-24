import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import store from '../../redux/store'


class MenuItemClass extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { isActive, path } = this.props
    return (
      <div className={isActive ? "menu-item active" : "menu-item" }onClick={() => {
        this.props.history.push(path)
        this.props.menuItemClick(path)
      }}>
        {this.props.children}
      </div>
    )
  }
}

const MenuItem=withRouter(MenuItemClass)
export default MenuItem;