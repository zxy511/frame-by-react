import React from 'react'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

class List extends React.Component {
    render() {

        const Topic = ({ match }) => (
            <h3>{match.params.topicId}</h3>
        )
        return (
        	<ul>
            	<li onClick={this.onClickHandle.bind(this)}>List</li>
            	<li>
            		{/*区别在于如果仅仅需要匹配路由,使用 Link 就可以了；
            		而 NavLink 的不同在于可以给当前选中的路由添加样式,如 activeStyle 和 activeClassName */}
            		{/*<NavLink exact to="/detail" activeStyle={{ color: '#4dc060' }}>to detail </NavLink>*/}
            		<Link to="/">home</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/detail`}>detail</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/type`}>type</Link>
                </li>
                <li>
                    {/* NESTED ROUTES */}
                    <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                    {/*<Route exact path={match.url} render={() => (
                      <h3>Please select a topic.</h3>
                    )}/>*/}
            	</li>
            </ul>
        )
    }

    onClickHandle() {
    	console.log(this.props.match.url)
    }
}

export default List