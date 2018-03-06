import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

import './style.less'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isStore: false
        }
    }

    render() {
    	const match = this.props.match
        const history = this.props.history
        return (
        	<div>
        		<BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)} />
            </div>
        )
    }

    componentDidMount() {
        console.log(123, this.props.store)
        console.log(456, this.props.storeActions)
    }

    // 购买事件
    buyHandle() {
        // 验证登录
        const loginFlag = this.loginCheck()
        const history = this.props.history
        if (!loginFlag) {
            return
        }

        // 购买流程
        
        // 跳转到用户主页
        // history.push('/user/')
    }

    // 收藏事件
    storeHandle() {
        // 验证登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        // 修改为已收藏样式

    }

    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 调整登录页面
            history.push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    undefined,
    {pure:false}
)(Buy)