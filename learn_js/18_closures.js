function hello() {
    let name = "drishti"
    console.log(name)
}

hello()

// console.log(name)

// OUTPUT
// ReferenceError:at line 8 name is not defined




/**
 * closures
 */
function outerFn() { //HOF
    let outerVar = "I am from the outer Fn"
    function innerFn() {
        console.log(outerVar) //accessible
    }
    return innerFn
}

let fn = outerFn()

fn() //still this fn can access the outer fn var which is local, this is called closure
// OUTPUT:
// I am from the outer Fn





function customerCounter() {
    let count = 0
    return function() { //anonymous inner fun.
        count++
        console.log("New Customer count is" , count)
    }
}

let counter = customerCounter() //implemented encapsulation using closures

counter()
counter()
counter()

// OUTPUT
// New Customer count is 1
// New Customer count is 2
// New Customer count is 3