let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo,bar,baz);//1 2 3

let [ ,  second] = ["1", "2", "3"];
console.log(second);//2

let [ , , third] = ["1", "2", "3"];
console.log(third);//3

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2,3,4]

let [x1, y1, ...z1] = ['a'];
console.log(x1,y1,z1);//a undefined []

let [foo1] = [];
console.log(foo1);//undefined
let [bar2, foo2] = [1];
console.log(bar2,foo2);//1 undefined

let [x2, y2] = [1, 2, 3];
console.log(x2,y2);//1 2