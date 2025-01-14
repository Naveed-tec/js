const myObj = {
    username: "Naveed",
    age: 23,

    myfunction: function(){
        console.log(`My name is ${this.username} and I am ${this.age} years old.`);
    }
}
// myObj.myfunction();
// myObj.username = "Mughal"
// myObj.myfunction()

// console.log(this) // window object
// brwoser k ander global object hota hai == window object
// node k ander global object hota hai == global object
// agar hum kisi object k ander this use karte hain to wo object ko refer karta hai
// agar hum this ko global scope me use karte hain to wo window object ko refer karta hai

// console.log(this.myObj) // undefined


// const AddNum = function(a,b){
//     // console.log(this)
//     return a+b
// }

// const AddNum = (a,b) => {
//     return a + b
// }

// const AddNum = (a,b) => a + b
// console.log(AddNum(3,4))

const reObj = () => ({username: "Naveed"})
console.log(reObj())