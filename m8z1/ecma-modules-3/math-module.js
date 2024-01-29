// named export - any number of named
export const squarePI = Math.PI * Math.PI
// named export - any number of named
export const five = 5

class CustomMath {
  constructor() {
    this.pi = Math.PI
  }
  square(x) {
    return x * x
  }
  rectangleArea(x, y) {
    return x * y
  }

  circleArea(r) {
    return this.pi * r * r
  }
}

// default export - only 1
export default new CustomMath()
