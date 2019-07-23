function putContent(t) {
	return function() {
		var a = 4;
		console.log(a+t);
	}
}
setInterval(putContent(2), 1000); //效果就是：每隔一秒输出6
