import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import RouterMap from './router/routerMap'

import Hello from './containers/Hello'

// 通用样式
import './static/css/common.less'

const store = configureStore()

render(
	<Provider store={store}>
    	<RouterMap/>
    </Provider>,
    document.getElementById('root')
)
