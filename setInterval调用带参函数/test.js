/*正常情况下，定时器函数setInterval或者setTimeout是不能带参数的，所以，可以通过返回一个不带参数的函数方式实现*/
function putContent(t) {
	return function() {
		var a = 4;
		console.log(a+t);
	}
}
setInterval(putContent(2), 1000); //效果就是：每隔一秒输出6
console.log('jh'); //程序执行到setInterval的时候，会立即接着执行下面的代码，所以console.log('jh')会先被打印输出，相当于setInterval是一个新的线程
