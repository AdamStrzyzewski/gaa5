"use strict"

// console.log("hello world")

// zmienna staje się równa sumie 10 i 15
// a = 10 + 15

// 10 + 15 = a //
// =
// +

// jedna linijka
// kolejna linijka

/*
    wielo-linijkowy komentarz
*/

// metoda log()
// metoda toUpperCase()
// methods
console.log("tresc".toUpperCase())
// właściwość length
// props/property
console.log("tresc23".length)

console.log("-----------------")

// var a = 5 // don't use it

// CONFIG_VARIABLE
// new Mail

const yearOfBirth = 1996
// yearOfBirth = 1000 // error
// const YEAROFBIRTH = 2000

// console.log(counter) // error, because variable is not yet declared
let counter = 0
counter = counter + 1
// counter = 0 + 1
counter = counter + 1
// counter = 1 + 1
console.log("counter", counter)

// let x
// const y error

// abc = 1245 // okay without use strict

console.log("-------TYPY PRYMITYWNE--------")

// Number
const age = 20
const points = 14.3
const points2 = -14.1
console.log(points + points2)

// String
const username = "AdamS9001$#FES{'}:"
const username2 = 'AdamS9001$#FES{"}:'.toLowerCase()
console.log(username2)

// Boolean / Bool
const isLoggedIn = true
const canMerge = false

// null
let selectedProduct = null

// undefined
let user

console.log("typeof age", typeof age)
console.log("typeof username", typeof username)
console.log("typeof isLoggedIn", typeof isLoggedIn)
console.log("typeof selectedProduct", typeof selectedProduct)
console.log("typeof user", typeof user)

console.log("------------")
// output
// alert("Hello World")
// console.log("after alert")

// input
// confirm -> false OR true
// const orderConfirmed = confirm("Please confirm your order")
// console.log(orderConfirmed)

// input 2
// prompt -> string OR null
// const userName = prompt("Please enter your username")
// console.log(userName)
// console.log(typeof userName)

console.log("---------operators-----")

const a = 10
const b = 5.5
console.log("a + b", a + b)
console.log("a - b", a - b)
console.log("a * b", a * b)
console.log("a / b", a / b)
console.log("a / b", a / 0)
console.log("a % b", a % b) // a / b -> 10 / 20 = 0 reszty 10

let value = 10

// value = value + 20
// value += 20
// value -= 20
// value *= 20
// value /= 20
console.log("value", value)

console.log(2 + 2 * 2) // 6
console.log(10 / (2 + 3)) // 2
console.log(10 / 2 + 3) // 8

console.log("-----Operatory logiczne-----")

const x = 5
const y = 10
const z = 5
const v = "5"

// greater than
console.log("x > y:", x > y) // false
// less than
console.log("x < y:", x < y) // true
// less than
console.log("x < z:", x < z) // false
// less than or equal
console.log("x <= z:", x <= z) // true
// greater than or equal
console.log("x >= z:", x <= z) // true

// strictly equals
console.log("x === y:", x === y) // false
// strictly equals
console.log("x === z:", x === z) // true
// strictly equals
console.log("x === v:", x === v) // false

// strictly doesn't equal
console.log("x !== y:", x !== y) // true
// strictly doesn't equal
console.log("x !== v:", x !== v) // true
// strictly doesn't equal
console.log("x !== z:", x !== z) // false

// === vs ==
console.log("x == v:", x == v)
// !== vs !=

// operatory logiczne
// === // good
// == // bad

// operator przypisania
// =

console.log("------Numbers-----")
const valueFromUser = "15"
console.log(valueFromUser + 30) // "15" + "30"
console.log(valueFromUser * 30) // 15 * 30 === 450

// parse / casting / type conversion

// Number.parseInt(string)
// Number.parseFloat(string)

console.log("15.35", Number.parseInt("15.35"))
console.log("10px", Number.parseInt("10px"))
console.log("px10", Number.parseInt("px10"))
console.log("ifdsaji", Number.parseInt("ifdsaji"))

console.log("15.35", Number.parseFloat("15.35"))
console.log("15,35", Number.parseFloat("15,35"))
console.log("10px", Number.parseFloat("10px"))
console.log("px10", Number.parseFloat("px10"))
console.log("ifdsaji", Number.parseFloat("ifdsaji"))

const parsed1 = Number.parseFloat("15.35")
const parsed2 = Number.parseFloat("px10")

console.log("typeof", typeof parsed1)
console.log("isNaN1", Number.isNaN(parsed1))
console.log("isNaN2", Number.isNaN(parsed2))

console.log(0.1 + 0.2)

const lotsOfDecimals = 5 / 9
console.log(lotsOfDecimals)

console.log(Math.floor(2.5))
console.log(Math.floor(2.9))
console.log(Math.ceil(2.1))
console.log(Math.round(2.5))

console.log(Math.round(Math.floor(lotsOfDecimals * 1000) / 10) / 100)

console.log("-----string----")

const userName = "Mango"

console.log(userName[0])

console.log(userName + "Test")

console.log(`${userName.toUpperCase()}-Test-${userName}`)
console.log(userName.toLowerCase() + "-Test-" + userName)

console.log(userName.length) // 5 -> 0,1,2,3,4 indexes

const message = "welcome to to bahamas!"

console.log(message.indexOf("welcome")) // 0
console.log(message.indexOf("to")) // 8
console.log(message.indexOf("poland")) // -1

console.log(message.includes("to")) // true
console.log(message.includes("poland")) // false

console.log(message.endsWith("bahamas!")) // true
console.log(message.endsWith("poland!")) // false

// in message replace first "to" with "in"
console.log(message.replace("to", "in"))
// in message replace all "to" with "in"
console.log(message.replaceAll("to", "in"))

// slices of message, from 0 index to 3 index without 3
// <0, 3)
console.log(message.slice(0, 3))
console.log(message.slice(3, 5))
