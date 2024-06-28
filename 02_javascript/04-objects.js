//const tinderUser=new Object()  singleton object
const tinderUser={}  // non singleton object


tinderUser.id="123abc"
tinderUser.name="sunny"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userName:{
            firstname:"shreyashi"
            ,lastName:"singh"
        }
    }
}

//console.log(regular]User.fullname.userName.firstname);

const obj1={1:"a",2:"b"}
const obj2={1:"a",2:"b"}
const obj3={1:"a",2:"b"}
const obj4={1:"a",2:"b"}
const obj7={2:"a",3:"b"}

//const obj5={obj1,obj2}

const obj6=Object.assign({},obj1,obj2,obj7)
//kconsole.log(obj6)

const obj8={...obj1,...obj2}
//console.log(obj8)

const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    }
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

