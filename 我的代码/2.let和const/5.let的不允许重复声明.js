// 报错
// function func() {
//     let a = 10;
//     var a = 1;
//   }
  
  // 报错
//   function func2() {
//     let a = 10;
//     let a = 1;
//   }


//可以
function func3(){
    var a = 1
    var a = 10
}


//函数的参数似乎默认是let声明?
function func(arg) {
    let arg;
  }
  func() // 报错 两个arg在同一个作用域 重复声明了
  
  function func(arg) {
    {
      let arg;
    }
  }
  func() // 不报错 因为新加了个子作用域