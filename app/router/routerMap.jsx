// 路由配置
import React from 'react'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

import App from '../containers'
import Hello from '../containers/Hello'
import List from '../containers/List'
// import Detail from '../containers/Detail'
import NotFound from '../components/NotFound'

class RouterMap extends React.Component {
    updateHandle() {
        console.log('router发生变化');
    }

    render() {
        return (
            <HashRouter>
                <App>　　
                    <Route exact path="/" component={Hello} />
                    <Route path="/list" component={List} />
                    {/*<Route path="/detail" component={Detail} />*/}
                    {/*<Route component={NotFound}/>*/}
                </App>
            </HashRouter>
        )
    }
}


export default RouterMap