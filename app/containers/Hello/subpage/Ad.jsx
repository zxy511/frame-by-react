import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getAdData } from '../../../fetch/home/home.js'

// import './style.less'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.state.data.length}</li>
                </ul>
            </div>
        )
    }

    componentDidMount() {
        const adData = getAdData()
        adData.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json
            if (data.length) {
                this.setState({
                    data
                })
            }
        })
    }
}

export default Ad