//array
// const myArray=[0,1,2,3,4,5,true]
// const myHeros=["pokimon","gigi"]

// console.log(myArray[0])

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

// const newArr=myArray.join()
// console.log(myArray) //array
// console.log( typeof newArr) // string

//slice,splice

// console.log("A",myArray);

// const myn1=myArray.slice(1,3)
// console.log(myn1);
// console.log(myArray)

// const  myn2=myArray.splice(1,3)//[1,2,3] iss case me last wala element bhi include hoga
// console.log(myn2);
// console.log(myArray)
// iss case in range include toh hota hai but utna no. orirginal value me se delete ho jata hai

// const myArr=[1,2,3,4]
// console.log(myArr)
// const marvel_heros=["thor","Ironman","spiderman"]
// const dc_heros=["superman","flash","batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros)
// // console.log(marvel_heros.indexOf('batman')) // it shows -1


// marvel=marvel_heros.concat(dc_heros)
// //console.log(marvel)

// // push is push into same array where concat is push into new array

// const all_new_heros=[...marvel_heros, ...dc_heros]
// //console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("shreyashi"))
// console.log(Array.from("shreyashi"))  // pura hi array bna dega
// console.log(Array.from({name:"shreyashi"}))// intersting

// let score=100
// let score2=200
// let score3=300

// console.log(Array.of(score,score2,score3));
