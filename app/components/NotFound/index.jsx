import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

// import './style.less'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div>404 NotFound</div>
        )
    }
}

export default NotFound