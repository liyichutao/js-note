 
var a;
console.log(a);
//undefined


//变量提升
console.log(a);
var a=1;

//等价于
var a;
console.log(a);
a=1;


//标识符包括$
$aaa = 33;
console.log($aaa);

//大括号不构成单独作用域
{
    var a = 1;
}
console.log(a);


//switch结构不利于代码重用，往往可以用对象形式重写。
var o = {
    banana: function(){console.log("banana.");},
    apple: function(){console.log("apple.");},
    default: function(){console.log("default.");}
};

var fruit = "default";
if(o[fruit]){
    o[fruit]();
}else {
    o['default']();
}

//标签跳出双重循环,break可替换成continue
top:
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
           if(i==1 && j==1) break top; 
           console.log("i=" + i + ",j=" + j);
        }
    }

//typeof除了以下几个，其他都返回"object"
function f(){}
console.log(typeof f)            //"function"
console.log(typeof 123)          //"number"
console.log(typeof "123")        //"string"
console.log(typeof false)        //"boolean"
console.log(typeof aaa)          //"undefined"


//严格相等 === !==


//除了下面6个值为false，其他都为true
undefined
null
false
0
NaN
""

//[]和{}都是true


1===1.0     //true,这个1.0会被优化，不是浮点数
1+1.0       //2
(0.2) ===(0.3-0.1)//浮点数还是不能做相等比较

//NaN表示非数字
Nan === Nan     //false
5-'x'           //NaN

//数组indexOf使用的是严格相等运算符
[NaN].indexOf(NaN)      //false

isNaN(123)              //判断是否是NaN

console.log(10===10.0);
