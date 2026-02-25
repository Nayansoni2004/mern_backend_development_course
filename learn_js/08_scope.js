/**
 * Global scope
 */
var name = "drishti"

console.log(name)

function func() {
    console.log(name)
}

func() // function call
// OUTPUT : drishti
//          drishti



/**
 * Local scope/ Function scope variable
 */

function func() {
    var num = 55
    console.log(num)
}

func()
// console.log(num) <-error generating line
// OUTPUT : ReferenceError: num is not defined



/**
 * Block Scope
 */

{
    let x = 100
    console.log(x)
}

console.log(x)
// OUTPUT : 
// console.log(x)
//             ^
// ReferenceError: x is not defined