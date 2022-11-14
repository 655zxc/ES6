//从let到代码块顶部是暂时性死区
//暂时性死区的本质就是，只要一进入当前作用域，
//所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。




var tmp = 123;

// let tmp
//错误

//一个代码块
if (true) {
  tmp = 'abc'; // ReferenceError 这个tmp是上面定义的全局变量
  let tmp;
}




if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}



//let x以上到代码块部分都是暂时性死区,这里typeof使用x会报错
//如果一个变量根本没有被声明，使用typeof反而不会报错。
typeof x; // ReferenceError
let x;
