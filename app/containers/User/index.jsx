import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

import Top from '../../components/Top'
import UserInfo from '../../components/UserInfo'

import './style.less'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            username: '',
            orderList: []
        }
    }

    render() {
        const hashRouter = HashRouter
        const history = this.props.history
        return (
            <div className="app-page">
                <Top title="用户中心" backRouter='/' history={history} />
                <UserInfo username={this.state.username} orderInfo={this.state.orderList} />
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            username: this.props.userinfo.username,
            orderList: [
                {
                    title: '标题1',
                    titDesc: '标题描述1',
                    desc: '详细描述1'
                },
                {
                    title: '标题2',
                    titDesc: '标题描述2',
                    desc: '详细描述2'
                },
                {
                    title: '标题3',
                    titDesc: '标题描述3',
                    desc: '详细描述3'
                }
            ]
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    undefined,
    {pure:false}
)(User)