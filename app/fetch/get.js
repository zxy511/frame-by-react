import 'whatwg-fetch'
import 'es6-promise'

// get 请求
export function get(url) {
	let result = fetch (url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	});

	return result;
}