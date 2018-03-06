import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Top extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <h3 className="page-top">
                <span onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                {this.props.title}
            </h3>
        )
    }

    clickHandle() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            this.props.history.push(backRouter)
        } else {
            // 后退
            window.history.back()
        }
    }

    componentDidMount() {
        
    }
}

export default Top