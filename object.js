let mysym = Symbol("Hello")
let mysymobj = Object(mysym)
let mysymstr = String(mysym)
// console.log(typeof mysym)
// console.log(typeof mysymobj)
// console.log(typeof mysymstr)

// let  sym1 = Symbol("World")
// let  sym2 = Symbol("World")
// console.log(sym1 === sym2)

let  sym1 = Symbol.for("World")
let  sym2 = Symbol.for("World")
console.log(sym1 === sym2)
                             //Objects as literals
let JsUser = {
    [mysym] : "Hello World",
    name : "Naveed",
    age : 22,
    email : "naveedzulfiqar100@gmail.com",
    location : "Muridke",
    isLoogedIn : false
}
// Object.freeze(JsUser)
// JsUser.email = "naveedzulfiqar102@gmail.com"
console.log(typeof JsUser[mysym])

JsUser.greetings = function(){
    console.log("Hello World")
}
JsUser.greetings()

JsUser.greetingsTwo = function(){
    return `Hello User, ${this.name}`
}
console.log(JsUser.greetingsTwo())

                                     //Objects as constructor or singleton
let newUser = new Object()
newUser.id = "Naveed"
newUser.age = "22"
newUser.email = "naveedzulfiqar100@gmail.com"
// console.log(newUser)

// let obj1 = {1: "a", 2: "b"}
// let obj2 = {3: "c", 4: "d"}

// let obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(newUser))
console.log(Object.values(newUser))
console.log(Object.entries(newUser))

                                // de-structuring objetcs
const course = {
    name: "Naveed",
    price: "999",
    isFree: false
}
const {name} = course
console.log(name)
