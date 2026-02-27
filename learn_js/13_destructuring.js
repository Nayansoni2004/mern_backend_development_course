/**
 * Destructuring in arrays
 */
const nums = [1,2,3]

const [a,b,c,d] = [1,2,3]
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// OUTPUT : 
// 1
// 2
// 3
// undefined

const [p,q,r] = [1,2,[4,5,6]]

console.log(p) // OUTPUT : 1
console.log(q) // OUTPUT : 2
console.log(r) // OUTPUT : [ 4, 5, 6 ]

/**
 * Destructuring in Objects
 */
const per = {
    age : 45,
    name : "Rajesh",
    city : "saugor",
    address : {
        city : "Bangalore",
        state : "karnataka"
    }
}

const { name, age, hobby, address : {city, state} } = per

console.log(name)
console.log(age)
console.log(hobby)
// console.log(address) // OUTPUT : { city: 'Bangalore', state: 'karnataka' }
console.log(city) // OUTPUT : Bangalore
// OUTPUT : 
// Rajesh
// 45
// undefind
