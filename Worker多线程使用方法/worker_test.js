/*子线程*/
var data = null;
onmessage = function(ev){
    data = ev.data;
    console.log(data);  // worker_test.html页面输出{ j: "sjdjd", k: 12 }   注：子线程没有alert函数（因为js中没有alert函数）
    postMessage({a:'success!', b:'successfully'}); //传回主线程
};
