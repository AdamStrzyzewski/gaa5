// "type": "module"

// line:17 from math-module.js => new CustomMath()

// default export, named export (destructurization)
// import customMath, { five, squarePI } from "./math-module.js"

// default export, namespace export
import customMath, * as allNamed from "./math-module.js"

const area = customMath.rectangleArea(2, 10)

console.log(area)

// console.log({ five, squarePI })

console.log(allNamed)
