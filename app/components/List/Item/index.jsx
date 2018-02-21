import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        let index = this.props.index
        let item = this.props.data

        return (
            <li>
                <h4>{item.title}:{item.subTitle}</h4>
            </li>
        )
    }
}

export default Item