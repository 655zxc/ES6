const foo = Object.freeze({a:{}});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

foo.a.prop = 123//有效
console.log(foo);