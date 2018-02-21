import React from 'react'
import { connect } from 'react-redux'

import Category from '../../components/Category'
import Ad from '../../containers/Hello/subpage/Ad.jsx'
import List from '../../containers/Hello/subpage/List.jsx'

class Main extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div className="page-main">{this.props.main.desc}

                {/*轮播图*/}
                <Category/>

                <Ad />
                <List cityName={this.props.userinfo.cityName} />

                <div>
                	<input value={this.state.value} 
                			onChange={this.InputOnChangeFn.bind(this)} 
                			onKeyUp={this.InputOnKeyUpFn.bind(this)} />
                	<ul>
                		{this.props.data.map(function(item, index){
                			return <li key={index}>{item.text}</li>
                		})}
                	</ul>
                </div>
            </div>
        )
    }

    InputOnChangeFn(e) {
    	this.setState({ value: e.target.value})
    }

    InputOnKeyUpFn(e) {
    	const value = this.state.value;
    	if (e.keyCode === 13 && value.trim()) {
    		this.props.submitFn(value);
    		this.setState({value: ''});
    	}
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
    mapDispatchToProps
)(Main)