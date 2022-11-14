// let {p: [x, { y }]} = {p: ["Hello", { y: "World" }]};
// console.log(x,y,p);


// let { p, p: [x, { y }] } = {p: ["Hello", { y: "World" }]};
// console.log(x,y,p);

// const node = {loc: {start: {line: 1,column: 5}}};

//   let {loc,loc:{start},loc:{start:{line,column}}} = node
//   console.log(loc,start,line,column);


function move({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
  console.log(move({x: 3, y: 8}),move({x: 3}),move({}),move());
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]