import React from 'react'

class App extends React.Component {
    render() {
        return (
        	<div>
        		<p>head</p>
            	<div>{this.props.children}</div>
        		<p>footer</p>
        	</div>
        )
    }
}

export default App