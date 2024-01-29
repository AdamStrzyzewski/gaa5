// "type": "module", in package.json

// {
//     square,
//     rectangleArea,
//     circleArea,
//     pi
// }

// typical import
// import { square, pi } from "./math-module.js"

// namespace import
// const math = {
//     square,
//     rectangleArea,
//     circleArea,
//     pi
// }
import * as math from "./math-module.js"

const square = (x) => `${x * x}cm^2`

const area = math.square(5)

console.log(area)
console.log(square(10))
// console.log(pi)
