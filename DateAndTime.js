let date = new Date()
// console.log(date)
// console.log(date.toString());
// console.log(date.toLocaleString());

let CreateDate = new Date(2025, 0, 2)    //months counting starts from 0
// console.log(CreateDate.toDateString());

let CreateOtherDate = new Date("2025-01-02")
// console.log(CreateOtherDate.toLocaleString())

let dateOne = new Date()
// console.log(CreateDate.toISOString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(CreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

console.log(dateOne.toLocaleString('default',{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: "long"
}))