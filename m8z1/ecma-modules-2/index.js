// "type": "module"

// line:17 from math-module.js => new CustomMath()
// import a default export
import customMath from "./math-module.js"

const area = customMath.rectangleArea(2, 10)

console.log(area)
