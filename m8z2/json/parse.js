// JSON string
const bookDataString =
  '{"title":"Outsider","bestseller":true,"author":{"firstName":"Stephen","lastName":"King"},"pageCount":500,"testA":null,"genres":["thriller","horror"]}'

console.log(bookDataString.title) // doesn't work
console.log('{"title":"Outsider"'.title) // doesn't work

const bookObject = JSON.parse(bookDataString)
console.log(bookObject)
console.log(bookObject.title) // => "Outsider"

const dog = [
  {
    name: "Pirat",
  },
  { name: "Mamba" },
]

console.log(JSON.parse(JSON.stringify(dog))) // string -> array
console.log(JSON.stringify(dog)) // string
