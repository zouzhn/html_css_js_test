var obj1 = {
	a: 0,
	b: {
		c: 0
	}
};
var obj3 = JSON.parse(JSON.stringify(obj1)); //先将obj1转换为字符串，然后再转回成JSON对象
console.log(JSON.stringify(obj1)); //结果为：{"a":0,"b":{"c":0}}
console.log(typeof(JSON.stringify(obj1))); //结果为：string
obj1.a = 4;
obj1.b.c = 4;
console.log(obj1); //结果为：{a: 4, b: {c: 4}}
console.log(obj3); //结果为：{a: 0, b: {c: 0}}，obj3与obj1完全不相关了
console.log(typeof(obj3)); //结果为：object，具体而言就是JSON对象
