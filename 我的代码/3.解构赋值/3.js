// let {p: [x, { y }]} = {p: ["Hello", { y: "World" }]};
// console.log(x,y,p);


// let { p, p: [x, { y }] } = {p: ["Hello", { y: "World" }]};
// console.log(x,y,p);

const node = {loc: {start: {line: 1,column: 5}}};

  let {loc,loc:{start},loc:{start:{line,column}}} = node
  console.log(loc,start,line,column);