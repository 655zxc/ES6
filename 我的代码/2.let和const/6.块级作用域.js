//ES5 只有全局作用域和函数作用域
var tmp = "111";
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}
f(); // undefined
//调用f()后,执行if,导致var变量提升,内层变量可能会覆盖外层变量
//但是由于函数作用域,这个var的提升只在f()内的顶部
console.log(tmp);//111
//函数作用域里面的var变量提升不会影响到外部



var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 5
//循环结束后，i并没有消失，泄露成了全局变量。


//ES6有了块级作用域
function f1() {
    let n = 5;
    var m = 5
    if (true) {
      let n = 10;
      var m = 10
    }
    console.log(n,m); // 5
  }
  f1()




