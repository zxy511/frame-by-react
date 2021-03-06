import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

// import './style.less'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
             <div className="page-footer">{this.props.footer.desc}</div>
        )
    }
}

export default Footer