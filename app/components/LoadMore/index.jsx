import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle() {
        this.props.loadMoreFn()
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        // 获取dom节点 使用ref
        const wrapper = this.refs.wrapper
        
        let timeoutId
        // 滚动事件要绑定在相应对象上 若全屏滚动，对象为window
        let scrollBox = document.getElementsByClassName('page-main')[0]

        function callback () {
            // 获取该dom节点与页面顶部的距离
            const top = wrapper.getBoundingClientRect().top
            const scrollBoxHeight = scrollBox.clientHeight
            if (top && top < scrollBoxHeight) {
                // 滚动高度超过容器高度时，自动执行加载更多
                loadMoreFn()
            }
        }

        scrollBox.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            // 使用定时器用于避免页面一次滚动多次触发的情况发生
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }
}

export default LoadMore