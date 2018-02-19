import React from 'react'
import { Link } from 'react-router-dom'

import { getData, postData } from '../../fetch/data.js'

class Header extends React.Component {
    render() {
        return (

            <div className="page-header">
            	{this.props.title}
            	<Link to="/list">to list</Link>
            	<p onClick={this.onClickHandle.bind(this)}>点击发送请求</p>
            </div>
        )
    }

    onClickHandle() {
    	// getData()
    	postData()
    }
}

export default Header