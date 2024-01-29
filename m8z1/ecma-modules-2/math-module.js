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

// default export
export default new CustomMath()
