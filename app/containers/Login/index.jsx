import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

import Top from '../../components/Top'
import LoginComponent from '../../components/LoginComponent'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            title: "未登录",
            checking: true
        }
    }

    render() {
        const match = this.props.match
        return (
            <div className="app-page">
                <Top title={this.state.title} />
                {
                    this.state.checking
                    ? <div style={{textAlign : 'center'}}>等待中...</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.doCheck()
        console.log(this.props.match)
    }

    // 登录成功后的业务处理
    loginHandle(username) {
        // 保存用户名
        const action = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        action.update(userinfo)

        const match = this.props.match
        const userpage = match.params.userpage
        // 使用 this.props.history.push替换旧版本的hashHistory.push, 但注意前后需增加'/'
        const history = this.props.history
        if (userpage) {
            // 
            history.push('/' + userpage + '/')
        } else {
            // 跳转到默认页面 -- 即 用户中心页
            this.goUserPage()
        }
    }

    doCheck() {
        const userinfo = this.props.userinfo
        if(userinfo.username) {
            // 已登录
            this.setState({
                title: "已登录"
            })
            this.goUserPage()
        } else {
            // 未登录
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        // HashRouter.push('/user')
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    undefined,
    {pure:false}
)(Login)