import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getListData } from '../../../fetch/home/home.js'

import ListComponent from '../../../components/List'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            listData: [],
            hasMore: false
        }
    }

    render() {
        return (
            <div>当前城市：{this.props.cityName}
                <h2>猜你喜欢</h2>
                {
                    this.state.listData.length
                    ? <ListComponent listData={this.state.listData}/>
                    : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }

    // 获取首屏数据
    loadFirstPageData() {
        let cityName = this.props.cityName
        let data = getListData(cityName, 0)
        this.resultHandle(data)
    }

    // 数据处理
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // console.log(json)
            this.setState({
                listData: json.data,
                hasMore: json.hasMore
            })
        })
    }
}

export default List