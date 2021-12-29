// import { plus100 } from '../index'
const { fib } = require("./index.js");
const fibJS = (n) => (n < 2 ? n : fibJS(n - 1) + fibJS(n - 2));
const list = [];
for (let i = 0; i < 40; i++) {
  let st1 = +new Date();
  let r1 = fib(i);
  let ed1 = +new Date();
  let st2 = +new Date();
  let r2 = fibJS(i);
  let ed2 = +new Date();
  list.push([ed1 - st1, r1, ed2 - st2, r2]);
}

console.log(list);
