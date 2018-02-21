import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.listData.map((item, index) => {
                        return <Item key={index} data={item}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default List