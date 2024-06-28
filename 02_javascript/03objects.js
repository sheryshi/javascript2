// singleton

// object literals
//Object.create
const mySym=Symbol("key1")
const jsUser={
    name:"shreyashi",
    [mySym]:"mykey1", // if want to use as a symbol use square brac[]
    "full name":"shreyashi singh",// we can't access this name by . operator
    age:18,
    location:"jaipur",
    email:"shreyashi@google.com",
    isLoggedinDays:["monday","saturday"]
}

// myArray=['s','i']
// myArray[1]
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email="shreyashichatgpt.com"
//Object.freeze(jsUser)  // so, that no one can change the value of it
jsUser.email="shreyashi@microsoft.com"
console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user");
}

console.log(jsUser.greeting());

// string interpolation

jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsUser.greetingTwo())
console.log(jsUser['full name'])
console.log(jsUser[mySym])
