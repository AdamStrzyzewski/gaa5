function isZero(n) {
  if (n === 0) {
    return true
  }
  // throw error
  throw new Error("That's not a zero")
  // throw new SyntaxError("That's not a zero")

  // throw { msg: "test" } // bad practice
}

console.log(isZero(0))
try {
  console.log(isZero(15))
} catch (e) {
  console.log(e.name)
  console.log(e.message)
  //   console.log(e.stack)
}
