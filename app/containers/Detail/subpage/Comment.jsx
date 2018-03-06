import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class comments extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div>{this.props.params.detailId}</div>
        )
    }

    componentDidMount() {
        
    }
}

export default comments