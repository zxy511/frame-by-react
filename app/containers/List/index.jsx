import React from 'react'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

import Top from '../../components/Top'

class List extends React.Component {
    render() {

        const objs = [
            'detail1','detail2'
        ]

        return (
            <div className="app-page">
                <Top title="列表" />
            	<ul>
                    {/*<li>*/}
                        {/*区别在于如果仅仅需要匹配路由,使用 Link 就可以了；
                        而 NavLink 的不同在于可以给当前选中的路由添加样式,如 activeStyle 和 activeClassName */}
                        {/*<NavLink exact to="/detail" activeStyle={{ color: '#4dc060' }}>to detail </NavLink>*/}
                        {/*<Link to="/"><i className="icon-chevron-left"></i></Link>
                    </li>*/}
                	<li onClick={this.onClickHandle.bind(this)}>当前为List页面</li>
                    <li>
                        <Link to={`/detail/${objs[0]}`}>detail1</Link>
                    </li>
                    <li>
                        <Link to={`/detail/${objs[1]}`}>detail2</Link>
                    </li>
                </ul>
            </div>
        )
    }

    componentDidMount() {
        
    }

    onClickHandle() {
    	console.log(this.props.match.url)
    }
}

export default List