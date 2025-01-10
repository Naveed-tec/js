function addNums(a,b){
    // return (a + b)
    console.log(a + b)
}
// console.log(addNums(4,5))
// addNums(4,5)

function userLogin(username){
    return `${username} just Logged In`
}
// console.log(userLogin("Naveed"))

function userLogin(username = "Mughal"){
    if(username === undefined){
        console.log("Please enter a name")
        return 
    }
    return `${username} just Logged In`
}
// console.log(userLogin())
// console.log(userLogin("Naveed"))

function calculateCartPrice(...num1){
    return num1
}
const result = calculateCartPrice(100,130,1030,2300)
// console.log(result)
let sum = 0;
for(let i = 0; i < result.length; i++){
    sum += result[i]
}
// console.log(sum)

const userObj = {
    username: "Naveed",
    price: 399
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`)
}
// handleObject(userObj)
handleObject({
    username: "Naveed",
    price: 399
})

const myArray = [100,200,300,400]
function handleArray(newArray){
    return newArray[1]
}
console.log(handleArray(myArray))