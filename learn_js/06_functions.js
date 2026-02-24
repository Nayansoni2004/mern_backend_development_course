/**
 * Define a function
 */

function helloStudents() {
    console.log("Hello Students !")
}

helloStudents()
// OUTPUT : Hello Students !

/**
 * I want to get the sum of two numbers
 */
function sum(a,b = 10) {
    return a+b
}

console.log(sum(4))
// OUTPUT : 14

/**
 * special power of function in javascript
 */
function func() {
    console.log(arguments)
}

func(1,2,3,4,5,5,6)

// OUTPUT : [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 5, '6': 6 }