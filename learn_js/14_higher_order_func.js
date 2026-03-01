// operatorFn is also a function passed as a parameter
function operation(operatorFn, a, b) { //<-this is higher order func.
    
    return operatorFn(a, b) //this func. will become add func.
}

//defining a function that to be passed as a parameter
function add(a, b) {
    return a+b
}

let result = operation(add, 5, 6) //call

console.log(result)
// OUTPUT: PS D:\format_04_08_2025\mern_backend_development_course\learn_js> node 14_higher_order_func.js
// 11



//HOF(higher order func)
function getGreetMethod() { 
    return function() {
        console.log("hey, a func. is inside a func.");
    }
}

let greetFn = getGreetMethod()
console.log(typeof greetFn)

greetFn() //calll

// OUTPUT: 
// function
// hey, a func. is inside a func.



