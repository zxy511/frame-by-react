// 路由配置
import React from 'react'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

import App from '../containers'

import Hello from '../containers/Hello'

import List from '../containers/List'
import City from '../containers/City'
import Login from '../containers/Login'
import User from '../containers/User'
import Detail from '../containers/Detail'
import NotFound from '../components/NotFound'

class RouterMap extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>　　
                    <Route exact path="/" component={Hello} />
                    <Route exact path="/city" component={City} />
                    {/* :router? 加问号表示可选参数*/}
                    <Route path="/login/:userpage?" component={Login} />
                    <Route path="/user" component={User} />
                    <Route exact path="/list" component={List} />
                    <Route path="/detail/:detailId" component={Detail} />
                    {/*<Route path="/detail/:id" component={Detail} />*/}
                    
                    {/*<Route component={NotFound}/>*/}
                </App>
            </HashRouter>
        )
    }
}


export default RouterMap