import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
        	<div>
        		<button  onClick={this.props.storeHandle.bind(this)}>收藏</button>
                <button  onClick={this.props.buyHandle.bind(this)}>购买</button>
            </div>
        )
    }

    componentDidMount() {
        
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
)(BuyAndStore)