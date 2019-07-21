import React from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import App from '../views/App'

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App}>
        {/*<IndexRoute  />*/}
        {/*<Route path="/desk/index" />*/}
        {/*<Route path="/socketReceive" />*/}
        {/*/!** *菜单 开始 *!/*/}
        {/*<Route path="/echarts" />*/}
        {/*<Route path="/editor" />*/}
        {/*/!** *菜单 结束 *!/*/}
        {/*/!** *系统设置 开始 *!/*/}
        {/*<Route path={`/set/userManage`} />*/}
        {/*<Route path={`/set/roleManage`} />*/}
        {/*<Route path={`/set/moduleManage`} />*/}
        {/*/!** *系统设置 结束 *!/*/}
      </Route>
      <Route path="/login" />
      <Route path="*" />
    </div>
  </BrowserRouter>
)