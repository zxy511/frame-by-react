import React from 'react'

class Footer extends React.Component {
    render() {
        return (
             <div className="page-footer">{this.props.footer.desc}</div>
        )
    }
}

export default Footer