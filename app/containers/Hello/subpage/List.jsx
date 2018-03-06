import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getListData } from '../../../fetch/home/home.js'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            listData: [],           // 列表信息
            hasMore: false,         // 记录当前状态下，是否有更多数据可供加载
            isLoadingMore: false,   // 记录当前状态下，是“加载中...”还是“点击加载更多”
            page: 1                 // 下一页的页码
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
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}  />
                    : ''
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

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        // 发送请求获取数据
        const result = getListData(cityName, page)
        this.resultHandle(result)

        // 重新设置 page 的计数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })

    }

    // 数据处理
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // console.log(json)
            
            this.setState({
                listData: this.state.listData.concat(json.data),
                hasMore:  json.hasMore
            })
        })
    }
}

export default List