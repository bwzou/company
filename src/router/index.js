import React from 'react'
import { Switch, Route, IndexRoute, BrowserRouter, Link } from 'react-router-dom'
import App from '../views/App'

export default () => (
  <BrowserRouter>
    <Route path="/" component={App} />

    {/*/!* 部门管理 *!/*/}
    {/*<Route path="/desk/index" component={base.example} />*/}
    {/*<Route path="/socket/receive" component={base.receive} />*/}

    {/*/!* 项目管理 *!/*/}
    {/*<Route path="/echarts" component={base.example} />*/}
    {/*<Route path="/editor" component={base.receive} />*/}

    {/*/!* 权限管理 *!/*/}
    {/*<Route path={`/set/userManage`} component={base.example} />*/}
    {/*<Route path={`/set/roleManage`} component={base.receive} />*/}
    {/*<Route path={`/set/moduleManage`} component={base.editor} />*/}

    {/*/!* 文档管理 *!/*/}
    {/*<Route path={`/set/userManage`} component={base.example} />*/}
    {/*<Route path={`/set/roleManage`} component={base.receive} />*/}
    {/*<Route path={`/set/moduleManage`} component={base.editor} />*/}

    {/*/!* 论坛管理 *!/*/}
    {/*<Route path={`/set/userManage`} component={base.example} />*/}
    {/*<Route path={`/set/roleManage`} component={base.example} />*/}
    {/*<Route path={`/set/moduleManage`} component={base.example} />*/}

    {/* 其他 */}
    <Route path="/login" />
    <Route path="*" />
  </BrowserRouter>
)