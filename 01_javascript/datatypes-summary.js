// # premitive

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

/*const score=100
const ScoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
let UserEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=3454658908765n
console.log(bigNumber)


// # Refrence type or Non-primitive

//Array,Objects,Functions

const heros=["shakti","manu"]
let obj=
{
    name:"shreyashi",
    age:19,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp)
console.log(typeof myFunction)
console.log(typeof heros)*/




// ++++++++++++++++++++++++++++++++

//stack(primitive), Heap(Non-primitive)

let myname="shreyashisingh"

let anothername=myname
anothername="code"

console.log(anothername);
console.log(myname)

let user1={
    email:"user@google.com",
    upi:"user@yb"
}

let user2=user1

user2.email="shreyashi@gmail.com"

console.log(user1.email)
console.log(user2.email)

// jitne bhi primitive data type ate hai wo stack me jate hai 
// jitne bhi non-primitive datatype ate hai wo heap me jate hai yha pe 
// jo khuch bhi value hum rakhte hai uska refrence milta hai