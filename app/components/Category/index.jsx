import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            index: 0
        }
    }

    render() {

        let opts = {
            auto: 5000,
            // continuous: false,
            callback: function(index) {
                console.log(index)
                this.setState({
                    index: index
                })
            }.bind(this)
        }
        return (
            <div style={{backgroundColor: "pink"}}>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
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
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                            <li>旅行</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="category-point">
                    {/*当前图片index为{this.state.index}*/}
                    <li className={this.state.index === 0 ? "selected" : ""}>1</li>
                    <li className={this.state.index === 1 ? "selected" : ""}>2</li>
                    <li className={this.state.index === 2 ? "selected" : ""}>3</li>
                </ul>
            </div>
        )
    }

    componentDidMount() {
        // console.log(ReactSwipe)
    }
}

export default Category