// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(typeof myDate)
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())

//let myCreatedDate=new Date(2023,0,23)
let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

// mm//dd//yy format

//let mysDate=new Date("2023-01-14")
let mysDate=new Date("01-01-2024")
//console.log(mysDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
   weekday:"long",
   timeZone:''
})

