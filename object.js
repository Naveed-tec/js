let mysym = Symbol("Hello")
let JsUser = {
    [mysym] : "Hello World",
    name : "Naveed",
    age : 22,
    email : "naveedzulfiqar100@gmail.com",
    location : "Muridke",
    isLoogedIn : false
}
console.log(typeof JsUser[mysym])
