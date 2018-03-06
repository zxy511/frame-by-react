import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'

import Top from '../../components/Top'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

import './style.less'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
    	const match = this.props.match
    	const id = match.params.detailId
        return (
        	<div className="app-page">
        		<Top title="详情页" />
        		{/*{match.url}*/}
        		<Buy id={this.state.id}/>
	        	<Comment params={match.params} />
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match)
    }
}

export default Detail