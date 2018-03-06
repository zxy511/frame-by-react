import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            index: 0,
            datas:[
                // {
                //     type: '美食',
                //     list: [
                //         imgUrl: ' ',
                //         link: ' '
                //     ]
                // },{
                //     type: '娱乐',
                //     list: [
                //         imgUrl: ' ',
                //         link: ' '
                //     ]
                // },{
                //     type: '旅行',
                //     list: [
                //         imgUrl: ' ',
                //         link: ' '
                //     ]
                // }
            ]
        }
    }

    render() {

        let opts = {
            auto: 5000,
            // continuous: false,
            callback: function(index) {
                this.setState({
                    index: index
                })
            }.bind(this)
        }
        return (
            <div style={{backgroundColor: "pink"}}>
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                            <li>美食</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                            <li>娱乐</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div style={{textAlign : 'center'}} >
                    <div style={{display: 'inline'}}>
                        <ul className="category-point">
                            {/*当前图片index为{this.state.index}*/}
                            <li className={this.state.index === 0 ? "selected" : ""} onClick={this.pointHandle.bind(this, 0)}>1</li>
                            <li className={this.state.index === 1 ? "selected" : ""} onClick={this.pointHandle.bind(this, 1)}>2</li>
                            <li className={this.state.index === 2 ? "selected" : ""} onClick={this.pointHandle.bind(this, 2)}>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    pointHandle(index, e) {
        // 调用react-swipe组件方法
        // https://github.com/voronianski/swipe-js-iso#config-options
        this.reactSwipe.slide(index);
        // 修改当前index值
        this.setState({
            index: index
        })
    }

    componentDidMount() {
        // console.log(ReactSwipe)
    }
}

export default Category