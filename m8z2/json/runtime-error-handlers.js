// function foo(arr) {
//   arr.push("test")
// }

// console.log(5)
// foo([]) // no error
// console.log(7)
// foo("haha udaje") // TypeError
// console.log(9)
// console.log(b) // ReferenceError
// console.log(10)

// ------- handling

const jsonStringFromInternet = "[1,2,3,4,5]"
const badJsonStringFromInternet = "[1,2,3,4,5"

function sumNumbers(json) {
  try {
    const arrayOfNumbers = JSON.parse(json) // error goes to catch
    const sum = arrayOfNumbers.reduce((acc, number) => acc + number, 0)
    console.log(sum)
  } catch (e) {
    console.log("nastąpił błąd!")
    console.log("e.name", e.name)
    console.log("e.message", e.message)
    // console.log("e.stack", e.stack)
  }

  console.log("po bloku try...catch")
  console.log("------")
}

sumNumbers(jsonStringFromInternet) // console.log(15)
sumNumbers(badJsonStringFromInternet) // error handle
