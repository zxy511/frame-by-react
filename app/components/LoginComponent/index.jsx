import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            phone: '',
            phoneTit: '输入手机号',
            password: '',
            passwordTit: '输入密码'
        }
    }

    render() {

        return (
            <div style={{marginTop: '100px'}}>
                <div className="login-item">
                    <i className="icon-phone"></i>
                    <input
                        type="text"
                        placeholder={this.state.phoneTit}
                        onChange={this.changeHandle.bind(this, 'phone')}
                        value={this.state.phone}/>
                </div>
                <div className="login-item">
                    <i className="icon-key"></i>
                    <input 
                        type="password"
                        placeholder={this.state.passwordTit}
                        onChange={this.changeHandle.bind(this, 'password')}
                        value={this.state.password}/>
                </div>
                <div className="login-item login-commit">
                    <button onClick={this.clickHandle.bind(this)}>登录</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props.loginHandle)
    }

    changeHandle(key, e) {
        let field = {}
        field[key] = e.target.value
        this.setState(field)
        console.log(this.state[key])
    }

    clickHandle() {
        const username = this.state.phone
        const loginHandle = this.props.loginHandle
        loginHandle(username)
    }
}

export default LoginComponent