import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div className="userInfo-page">
                <ul className="userInfo-list">
                    <li>
                        <i className="icon-user"></i>{this.props.username}
                    </li>
                    <li>
                        <i className="icon-phone"></i>15259126237
                    </li>
                    <li>
                        <i className="icon-map-marker"></i>福州
                    </li>
                </ul>
                <div className="userInfo-order">
                    <h3>我的订单</h3>
                    <ul>
                        {
                            this.props.orderInfo.map((data, index) => {
                                return (
                                    <li key={index} onClick={this.listClickHandle.bind(this, index, data)}>
                                        <image alt="未知图片" />
                                        <div>
                                            <h4>{data.title}</h4>
                                            <span>{data.titDesc}</span>
                                            <p>{data.desc}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        
    }

    listClickHandle(index, data) {
        console.log('当前点击了第'+index+'行，标题为"'+data.title+'"')
    }
}

export default UserInfo