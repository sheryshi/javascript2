const score=400
console.log(score)
const balance= new Number(100)
console.log(balance)
console.log(typeof(balance));

console.log(balance.toString().length)
console.log(balance.toFixed(3)) //toFixed() to minimize precision value


const otherNumber=1123.8966
console.log(otherNumber.toPrecision(4));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))



// ++++++++++++++++++++++ Maths ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.pow(2,3));
console.log(Math.min(4,3,6,8));
console.log(Math.max(-1,2,4,5,-6));
console.log(Math.round(Math.random()*10+1));


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)