/**
 * Syntax related
 */

// console.log("Hello

// OUTPUT: SyntaxError: Invalid or unexpected token






// Runtime exceptions
// let x = 5
// console.log(x.toUpperCase())

// OUTPUT: TypeError: x.toUpperCase is not a function






/**
 * Logical
 */

// let num = 5
// for(i = -3; i < 5; i++) {
//     console.log(num/i)    //here what happens is divide by 0 will come which is logical error
// }

// OUTPUT:
// -1.6666666666666667
// -2.5
// -5
// Infinity
// 5
// 2.5
// 1.6666666666666667
// 1.25






// let obj = undefined

// console.log(obj.name)

// OUTPUT: TypeError: Cannot read properties of undefined (reading 'name')







try {
    let obj = undefined
    console.log(obj.name)
} catch(err) {
    console.log("Exception handled")
    console.log(err)
} finally {
    console.log('I will always execute')
}
// OUTPUT: 
// Exception handled
// TypeError: Cannot read properties of undefined (reading 'name')
// I will always execute
