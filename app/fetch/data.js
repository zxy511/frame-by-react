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
	// result.then(res => {
	// 	return res.json()
	// }).then(json => {
	// 	console.log(json)
	// })

    result.then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
        }
    })
    .then((response) => {
        if (response && response.error_code === 0) {
            console.log(response)//response.error_code 是与服务器端的约定，非0就是错误
        } else {
            console.log(response.message)//response.message也是与服务器端的约定，error_code !==0 就需要返回message
        }
    })
    .catch((err) => {
        console.log(err.message)
    })
}