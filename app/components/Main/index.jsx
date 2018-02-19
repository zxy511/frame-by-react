import React from 'react'

class Main extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div className="page-main">{this.props.main.desc}<br/>
            	<input value={this.state.value} 
            			onChange={this.InputOnChangeFn.bind(this)} 
            			onKeyUp={this.InputOnKeyUpFn.bind(this)} />
            	<ul>
            		{this.props.data.map(function(item, index){
            			return <li key={index}>{item.text}</li>
            		})}
            	</ul>
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

export default Main