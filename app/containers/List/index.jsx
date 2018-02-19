import React from 'react'
import { Link, matchPath } from 'react-router-dom'

class List extends React.Component {
    render() {
        return (
        	<div>
            	<p onClick={this.onClickHandle.bind(this)}>List</p>
            	<p>
            		{/*区别在于如果仅仅需要匹配路由,使用 Link 就可以了；
            		而 NavLink 的不同在于可以给当前选中的路由添加样式,如 activeStyle 和 activeClassName */}
            		{/*<NavLink exact to="/detail" activeStyle={{ color: '#4dc060' }}>to detail </NavLink>*/}
            		<Link to="/list/detail">to detail</Link><br/>
            		<Link to="/">to home</Link>
            	</p>
            </div>
        )
    }

    onClickHandle() {
    	debugger
    	console.log(matchPath)
    }
}

export default List