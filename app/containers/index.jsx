import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'

// 最外层组件：父级组件
class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone: false
		}
	}
    render() {
        return (
        	<div className="follow-parent">
		        {
		        	this.state.initDone
		        	? this.props.children
		        	: <div>加载中......</div>
		        }
		    </div>
        )
    }

    componentDidMount() {
    	// 通过localStore设置城市
    	// localStore.setItem(CITYNAME, '厦门')
    	
    	// 从localstorerage里面获取城市
    	let cityName = localStore.getItem(CITYNAME)
    	if (cityName == null) {
    		cityName = '北京'
    	}
    	// console.log(cityName)

    	// 将城市信息存储到 Redux 中
    	this.props.userInfoActions.update({
    		cityName: cityName
    	})

    	// 当页面加载完成后, 取消显示 ‘加载中...’ 文字
    	this.setState({
    		initDone: true
    	})
    }
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)