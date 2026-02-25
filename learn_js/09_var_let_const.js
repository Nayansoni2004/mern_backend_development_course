// /**
//  * var :
//  * 1. It's used to define a variable
//  * 2. It has function scope but no block scope
//  * 3. It is hoisted
//  */

function f1() {
    var i = 10
    console.log(i)
}

f1()
console.log(i)
// // OUTPUT :
// // console.log(i)
// //             ^
// // ReferenceError: i is not defined



/**
 * Block scope is not valid in this
 */
{
    i = 15
}
console.log(i)
// OUTPUT : 15

console.log(i)

var i = 90

console.log(i)
// OUTPUT : 
// undefined
// 90



/**
 * let
 * 
 * 1. No hoisting
 * 2. It also has block scope
 */

console.log(j)

let j = 60
// OUTPUT :
// console.log(j)
//             ^
// ReferenceError: Cannot access 'j' before initialization


{
    let name = "prayank"
}

console.log(name)
// OUTPUT :
// console.log(name)
//             ^
// ReferenceError: name is not defined



/**
 * const
 * -scope is exactly same as let
 * -const variables are final, can't be re-assigned a value
 * 
 */

const country = "India"

country = "USA"

// OUTPUT :
// country = "USA"
//         ^
// TypeError: Assignment to constant variable.