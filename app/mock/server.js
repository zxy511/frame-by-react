var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.get('/', function *(next) {
    this.body = 'hello koa !'
});

router.get('/api', function *(next) {
    this.body = 'test data'
});
router.get('/api/1', function *(next) {
	this.body = 'text data 1'
});
router.get('/api/2', function *(next) {
	this.body = {
		a: 100,
		b: '500'
	}
});

// home 页请求
let homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
	this.body = homeAdData
});
let homelistData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
	console.log('当前城市：' + this.params.city)
	console.log('当前页数：' + this.params.page)

	this.body = homelistData
});

router.post('/api/post', koaBody, function *(next) {
	this.body = JSON.stringify(this.request.body)
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);