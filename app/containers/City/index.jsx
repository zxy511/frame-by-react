import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js'

import Top from '../../components/Top'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import './style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div className="app-page">
                <Top title="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this.changeCity.bind(this)} />
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.userinfo)
        console.log(this.props.userInfoActions)
    }

    changeCity() {

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
)(City)