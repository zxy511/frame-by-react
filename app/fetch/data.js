import { get} from './get.js'
import { post} from './post.js'

export function getData() {
	// 获取字符串
	let result1 = get('/api/1')

	result1.then(res => {
		return res.text()
	}).then(text => {
		console.log(text)
	})

	// 获取json
	let result2 = get('/api/2')

	result2.then(res => {
		return res.json()
	}).then(json => {
		console.log(json)
	})
}

// 提交数据
export function postData() {
	let result = post('/api/post', {
		a: 100,
		b: 200
	})

	result.then(res => {
		console.log(res)
	}).then(json => {
		console.log(json)
	})
}