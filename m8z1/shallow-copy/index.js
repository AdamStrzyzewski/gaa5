const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
]

const sortUsers = (users) =>
  [...users].sort((a, b) => a.friends.length - b.friends.length)

const newUsers = sortUsers(users)

users[0].friends.push("new friend")
// console.log(newUsers[0])
// console.log(users[0])

const arr = [{ a: 1 }, { b: 1 }]

// const arr2 = [arr[0], arr[1]]
const arr2 = [...arr]

let a = 5
// assignment
// b = 5
let b = a
a = 10
console.log(a, b) // 5, 10

// reference
const x = { foo: 1 }
const y = x

// const z = { foo: x.foo }
// const z = { foo: 1 }
const z = { ...x } // no reference

x.foo = 5
console.log(x, y)
