import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now(),
            main: {
                desc: "中间内容",
                data: [
                    {
                        id: 0,
                        text: "111"
                    },
                    {
                        id: 1,
                        text: "222"
                    },
                    {
                        id: 2,
                        text: "333"
                    }
                ]
            },
            footer: {
                desc: "底部内容"
            }
        }
    }
    render() {
        return (
            <div className="app-page">
                <Header title="Header" cityName={this.props.userinfo.cityName}/>
                <Main main={this.state.main} data={this.state.main.data} submitFn={this.submitFn.bind(this)}/>
                <Footer footer={this.state.footer}/>
            </div>
        )
    }

    // 提交数据方法
    submitFn(value) {
        const id = this.state.main.data.length;
        this.setState({
            main:{
                desc: "内容已变化",
                data: this.state.main.data.concat({
                    id: id,
                    text: value
                })
            }
        })
    }

    // 鼠标点击事件 
    clickHandler() {
        this.setState({
            now: Date.now()
        })
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
    mapDispatchToProps,
    undefined,
    {pure:false}
)(Hello)