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
		b: '200'
	}
});

router.post('/api/post', koaBody, function *(next) {
	console.log(this.request.body)
	this.body = JSON.stringify(this.request.body)
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);