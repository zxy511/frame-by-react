import React from 'react'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'
import 'es6-promise'

import { getData, postData } from '../../fetch/data.js'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (
            <div className="page-header clear-fix">
                <Link to='/city' className="float-left">
                    {this.props.cityName}
                    <i className="icon-angle-down"></i>
                </Link>
                <Link to='/login/user' className="float-right">
                    <i className="icon-user"></i>
                </Link>
                <div>
                    <i className="icon-search"></i>
                    <input />
                </div>
                <Link to="/list">list</Link>
                {/*<ul className="">
                	<li>
                        <Link to="/list">list</Link>
                    </li>
                	<li>
                        <input value={this.state.searchValue} 
                            onChange={this.inputChangeHandle.bind(this, 'searchValue')} />
                        <p onClick={this.onClickHandle.bind(this)}>点击发送请求</p>
                    </li>
                </ul> */}
            </div>
        )
    }

    // 绑定输入框 onChange事件
    inputChangeHandle(stateName, e) {
        let val = {}
        val[stateName] = e.target.value
        console.log(stateName)
        this.setState(val)
    }

    onClickHandle() {
    	getData()
    	// postData()
    }
}

export default Header