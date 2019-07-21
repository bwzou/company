import React, { Component }  from 'react'
import { companyName } from '../../common/constant'

export default class NavHead extends Component {
  // 初始化页面常量、绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      userInfo: false, // 控制用户信息弹框显隐
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  // 登出
  handleLogout () {

  }

  // 点击logo
  logoClick = () => {

  }

  // 点击显示用户信息
  getUserInfo() {
    this.setState({ userInfo: true })
  }

  render () {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo')) || {}
    const roles = []
    userinfo && userinfo.roles && userinfo.roles.map((item) => {
      roles.push(item.roleName)
    })
    let name = ''
    if (sessionStorage.getItem('userinfo')) {
      name = JSON.parse(sessionStorage.getItem('userinfo')).userName
    }

    const { navHeadMenus } = this.props

    return (
      <header id="nav_head" className="nav-head">
        <div className="nav-head-container">
          <div className="nav-head-row">
            <div className="nav-head-brand" title={companyName} onClick={this.logoClick}>
              <span className="brand-title">
                <span className="brand-text"><span className="logo" />{companyName}</span>
              </span>
            </div>
            <nav className="nav-head-menus">
              {
                navHeadMenus && navHeadMenus.map((item, index) => (<span
                  key={index}
                  onClick={() => this.props.navHeadClick(item, index)}
                >{item.name}</span>))
              }
            </nav>
            <div className="nav-head-account">
              <ul>
                <li>
                  <a onClick={() => this.getUserInfo()}>{name || '阿文'}</a>
                </li>
                <li>
                  <a onClick={this.handleLogout}>退出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}