import React, { Component }  from 'react'
import Menu from '../components/Menu'
import SubMenu from '../components/SubMenu'
import store from '../../redux/store'
import { updateActiveSubMenu } from '../../redux/actions/path'

export default class NavSide extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      openKeys: [],
      navSideMenus: [],
      activeSubmenu: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setNavSideMenus()
    })
  }

  componentWillReceiveProps () {
    setTimeout(() => {
      this.setNavSideMenus()
    })
  }

  setNavSideMenus = () => {
    const { allMenus, activeMenu } = this.props
    this.setState({ navSideMenus: allMenus[activeMenu] })
  }

  // 菜单点击事件
  handleClick = (e) => {

  }

  subMenuClick = (path) => {
    store.dispatch(updateActiveSubMenu(path))
    this.setState({ activeSubmenu: store.getState().activePath.activeSubMenu })
  }

  // 二级菜单的生成
  renderNavSideItem = () => {
    const { navSideMenus, activeSubmenu } = this.state
    return navSideMenus.map((item, index) => {
      return (
        <SubMenu
          key={item.id}
          title={
            <span>
              <i title={item.name}/>
              <span className="menu-name">{item.name}</span>
            </span>
          }
          path={item.path}
          isActive={store.getState().activePath.activeSubMenu===item.path}
          subMenuClick={this.subMenuClick}
          items={item.children}
        >
        </SubMenu>
      )
    })
  }

  // 左侧菜单高亮控制
  navSideHighLight = () => {
    // const { pathname } = this.props.location
    // let selectedPath = [pathname.replace('/', '')]
    // if (pathname === '/' || pathname.indexOf('/') > -1) {
    //   selectedPath = ['/']
    // }
    // return selectedPath
  }

  navSideMini = () => {

  }

  onOpenChange = (openKeys) => {
    // const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)

  }

  render () {
    const { openKeys } = this.state
    return (
      <div className="nav-side">
        <nav id="nav-side-container" className="nav-side-container">
          <div className="nav-side-item" onClick={() => this.navSideMini()}>
            <i className="icon icon-nav-control"/>
          </div>
          <Menu onClick={this.handleClick}
                openKeys={openKeys}
                onOpenChange={this.onOpenChange}
                selectedKeys={this.navSideHighLight()}
          >
            {this.renderNavSideItem()}
          </Menu>
        </nav>
      </div>
    )
  }
}