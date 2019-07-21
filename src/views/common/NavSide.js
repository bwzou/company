import React, { Component }  from 'react'

export default class NavSide extends Component {

  // 菜单点击事件
  _handleClick () {

  }

  // 二级菜单的生成
  renderNavSideItem = (options) => {

  }

  // 左侧菜单高亮控制
  NavSideHighLight = () => {

  }

  render () {
    return (
      <div className="nav-side">
        <nav id="nav-side-container" className="nav-side-container">
          <div className="nav-side-item" onClick={() => this.navMini()}>
            <i className="icon icon-nav-control"/>
          </div>
          <div spinning={false}>
            <div onClick={this._handleClick}
                 theme="dark"
                 openKeys={openKeys}
                 onOpenChange={this.onOpenChange}
                 selectedKeys={this.leftMenuHighLight()}
                 mode="inline"
                 inlineIndent="16"
                 inlineCollapsed={menuStyle}
            >
              {this.renderLeftNav()}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}