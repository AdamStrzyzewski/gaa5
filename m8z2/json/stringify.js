// const user = require("./user.json")
// no parse needed, because it's "included" in require
// console.log(user[0].name)

const book = {
  title: "Outsider",
  bestseller: true,
  author: {
    firstName: "Stephen",
    lastName: "King",
  },
  pageCount: 500,
  testA: null,
  testB: undefined, // not in JSON
  foo() {
    console.log("hello")
  }, // not in JSON
}

// string, number, object, array, boolean, null

console.log(book)
book.genres = ["thriller", "horror"]

const jsonString = JSON.stringify(book)

book.genres.push("Detective story")

console.log(jsonString)
console.log(typeof jsonString)
