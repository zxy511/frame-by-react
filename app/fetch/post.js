import 'whatwg-fetch'
import 'es6-promise'

// 对象拼接成 key1=val1&key2=val2 的字符串形式
function obj2params(obj) {
	let result = '';
	for (let item in obj) {
		result += '&' + item + '=' + encodeURIComponent(obj[item])
	}

	// 去掉字符串中的第一个&
	if (result) {
		result = result.slice(1);
	}

	return result;
}

// post 请求
export function post(url, paramsObj) {
	let result = fetch(url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		// 请求参数
		body: obj2params(paramsObj)
	});


	return result;
}