// 路由配置
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Hello from '../containers/Hello'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../components/NotFound'

class RouterMap extends React.Component {
    updateHandle() {
        console.log('router发生变化');
    }

    render() {
        return (
            <BrowserRouter> 
                <Switch>　　
                    {/*exact 只想匹配path中的路径时使用*/}
                    <Route exact path="/" component={Hello}/>
                    
                    {/* 未添加exact参数时，可匹配 /list 和 /list/2    */}
                    <Route exact path="/list" component={List}/>
                    <Route path="/list/detail" component={Detail}/>
                    {/*<Route path={`${props.match.path}/:userId`} component={Detail}/>*/}
                    
                    {/*404路由写在末尾，前面都不匹配时，自动匹配404*/}
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterMap