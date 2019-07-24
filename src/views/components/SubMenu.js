import React, { Component } from 'react'
import MenuItem from './MenuItem'
import store from '../../redux/store'
import {updateActiveMenuItem} from '../../redux/actions/path'

export default class SubMenu extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeMenuItem: false
    }
  }

  menuItemClick = (path) => {
    store.dispatch(updateActiveMenuItem(path))
    this.setState({ activeMenuItem: store.getState().activePath.activeMenuItem })
  }

  render () {
    const { title, items, path, isActive} = this.props
    return (
      <div className={isActive ? "sub-menu active":"sub-menu"}>
        <div className="title"
             onClick={() => this.props.subMenuClick(path)}>
          {title}
        </div>
        {
          items.map((item, index) => (
            <MenuItem
              key={item.id}
              title={item.name}
              path={item.path}
              isActive={store.getState().activePath.activeMenuItem===item.path}
              menuItemClick={this.menuItemClick}
            >
              <i title={item.name} />
              <span className="menu-name">{item.name}</span>
            </MenuItem>
          ))
        }
      </div>
    )
  }
}