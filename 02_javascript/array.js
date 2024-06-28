//array
const myArray=[0,1,2,3,4,5,true]
const myHeros=["pokimon","gigi"]

console.log(myArray[0])

// shallow copy
// a shallow copy is a copy of an object whose properties share the same reference point to the same underlying values s those

//Deep copy
//where property do not show the same refrence


// Array methods

//myArray.pop
//myArray.unshift()
//myArray.shift()

/*myArray.push(5)
myArray.unshift(9)
myArray.unshift(9)
myArray.shift()
myArray.pop(2)
console.log(myArray);
console.log(myArray.includes(9))
console.log(myArray.indexOf(9))*/

const newArr=myArray.join()
console.log(myArray) //array
console.log( typeof newArr) // string

//slice,splice

console.log("A",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log(myArray)

const  myn2=myArray.splice(1,3)//[1,2,3] iss case me last wala element bhi include hoga
console.log(myn2);
console.log(myArray)
// iss case in range include toh hota hai but utna no. orirginal value me se delete ho jata hai



