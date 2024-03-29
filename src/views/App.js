import React, { Component } from 'react'
import NavHead from './common/NavHead'
import NavSide from './common/NavSide'
import Container from './common/Container'
import '../styles/base.less'

export default class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      allMenus: {
        employee: [{ // 员工管理
          id: 100,
          name: '部门管理',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 101,
            name: '部门列表',
            icon: '',
            parentId: 100,
            permission: '',
            display: true,
            children: []
          }, {
            id: 102,
            name: '新增部门',
            icon: '',
            parentId: 100,
            permission: '',
            display: true,
            children: []
          }]
        }, {
          id: 110,
          name: '人员管理',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 111,
            name: '人员列表',
            icon: '',
            parentId: 110,
            permission: '',
            display: true,
            children: []
          }, {
            id: 112,
            name: '添加人员',
            icon: '',
            parentId: 110,
            permission: '',
            display: true,
            children: []
          }]
        }],
        project: [{ // 项目管理
          id: 200,
          name: '项目管理',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 201,
            name: '部门列表',
            icon: '',
            parentId: 200,
            permission: '',
            display: true,
            children: []
          }, {
            id: 202,
            name: '新增部门',
            icon: '',
            parentId: 200,
            permission: '',
            display: true,
            children: []
          }]
        }],
        permission: [{ // 权限管理
          id: 300,
          name: '职位与权限',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 301,
            name: '职位列表',
            icon: '',
            parentId: 300,
            permission: '',
            display: true,
            children: []
          }, {
            id: 302,
            name: '添加职位',
            icon: '',
            parentId: 300,
            permission: '',
            display: true,
            children: []
          }]
        }],
        document: [{ // 文档管理
          id: 400,
          name: '需求文档',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 401,
            name: '文档列表',
            icon: '',
            parentId: 400,
            permission: '',
            display: true,
            children: []
          }, {
            id: 402,
            name: '上传文档',
            icon: '',
            parentId: 400,
            permission: '',
            display: true,
            children: []
          }]
        }, {
          id: 410,
          name: '技术文档',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 411,
            name: '文档列表',
            icon: '',
            parentId: 410,
            permission: '',
            display: true,
            children: []
          }, {
            id: 412,
            name: '上传文档',
            icon: '',
            parentId: 410,
            permission: '',
            display: true,
            children: []
          }, {
            id: 413,
            name: '在线编辑',
            icon: '',
            parentId: 410,
            permission: '',
            display: true,
            children: []
          }]
        }],
        forum: [{ // 论坛
          id: 500,
          name: '问答',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 501,
            name: '所有问答',
            icon: '',
            parentId: 500,
            permission: '',
            display: true,
            children: []
          }, {
            id: 502,
            name: '我要提问',
            icon: '',
            parentId: 500,
            permission: '',
            display: true,
            children: []
          }]
        }, {
          id: 510,
          name: '活动',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 511,
            name: '所有活动',
            icon: '',
            parentId: 510,
            permission: '',
            display: true,
            children: []
          }, {
            id: 512,
            name: '新建活动',
            icon: '',
            parentId: 510,
            permission: '',
            display: true,
            children: []
          }]
        }, {
          id: 520,
          name: '意见征集',
          icon: '',
          parentId: null,
          permission: '',
          children: [{
            id: 521,
            name: '所有征集',
            icon: '',
            parentId: 520,
            permission: '',
            display: true,
            children: []
          }, {
            id: 522,
            name: '新建征集',
            icon: '',
            parentId: 520,
            permission: '',
            display: true,
            children: []
          }]
        }],
        account: [{ // 个人信息
          id: 600,
          name: '基本信息',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }, {
          id: 610,
          name: '个人权限',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }, {
          id: 620,
          name: '修改密码',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }],
        message: [{ // 消息管理
          id: 700,
          name: '系统消息',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }, {
          id: 710,
          name: '会议通知',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }, {
          id: 720,
          name: '其他通知',
          icon: '',
          parentId: null,
          permission: '',
          children: []
        }]
      },
      navHeadMenus: [{
        key: 'employee',
        name: '部门管理'
      }, {
        key: 'project',
        name: '项目管理'
      }, {
        key: 'permission',
        name: '职位与权限'
      }, {
        key: 'document',
        name: '文档管理'
      }, {
        key: 'forum',
        name: '论坛'
      }],
      navSideMenus: [],
      activeMenu: 'employee',
      miniNavSide: false // 左侧导航菜单是否mini模式
    }
  }

  // 组件已经加载到dom中
  componentDidMount () {
    this.init()
  }

  init() {

  }

  // 顶部导航栏的点击事件
  navHeadClick = (item, index) => {
    if (item.length <= 0) {
      console.log('顶级菜单至少要有一个下级菜单')
      return
    }
    console.log('点击顶部导航栏')
    this.setState({ activeMenu: item.key })
  }

  render () {
    const { allMenus, navHeadMenus, activeMenu } = this.state
    return (
      <div className="app">
        <NavHead navHeadMenus={navHeadMenus}
                 activeMenu={activeMenu}
                 navHeadClick={this.navHeadClick} />
        <NavSide allMenus={allMenus}
                 activeMenu={activeMenu}
        />
        <Container />
      </div>
    )
  }
}
