////1、新建一个日期对象并把时间戳作为参数传进去就可以了：
//
//var timestamp = 1371466996.385926;
//var date = new Date(timestamp * 1000); // js 中是以毫秒为单位要乘以 1000
////2、对于已经存在的日期对象，调用 setTime 方法设置时间戳：
//var date = new Date();
//var timestamp = 1371466996.385926;
//date.setTime(timestamp * 1000); // js 中是以毫秒为单位要乘以 1000
////对于格林威治时间和本地时间， js 提供了不同方法(toGMTString(), toUTCString(), toLocaleString())输出，在需要格式化为字符串的时候调用不同方法就可以了。
//
//console.log(new Date().getTime());
//var time=new Date(1471759430399)
//console.log(time.toLocaleDateString());
//console.log(time.toLocaleTimeString());

function formatDate(now) {
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var hour=now.getHours();
    var minute=now.getMinutes();
    console.log(typeof minute);
    minute=(minute>9?minute:'0'+minute);
    var second=now.getSeconds();
    second=(second.length==2?second:'0'+second);
    return year+":"+month+":"+date+" "+hour+":"+minute+":"+second;
}
var d=new Date(1472190785);
console.log(formatDate(d));

//获取北京时间转化为时间戳
//var commonTime = new Date(Date.UTC(year, month - 1, day, hour, minute, second))
//commonTime=new Date(Date.UTC(16,7,21,14,38,7));
//console.log(commonTime);

var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));
timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872
console.log(stringTime + "的时间戳为：" + timestamp2);

