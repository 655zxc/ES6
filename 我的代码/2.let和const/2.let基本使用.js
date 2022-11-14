for (let i = 0; i < 10; i++) {
    // let只在这里面有效
  }
  
// console.log(i);
//错误


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
  //数组的每一项都是一个方法
}
a[6](); // 10
//每个函数的i都指向一个全局的i


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
//每个函数的i都指向自己代码块的i



//在for中 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
//可以看到设置了两次let不报错，因为这是父子作用域
//但平时写代码可以忽略
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc