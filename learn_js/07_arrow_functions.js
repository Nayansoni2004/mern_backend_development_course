/**
 * fn with no argument and no return type
 */
var hello = () => console.log("Hello Duniya waloon !!");

hello() 
// OUTPUT : Hello Duniya waloon !!

/**
 * fn with parameters and return type
 */
var sum = (a,b) => a+b

console.log(sum(10,8))
// OUTPUT : 18

/**
 * fn with parameters, multiple lines of fn body
 */
var process = (a,b) => {
    console.log("need to process")
    // console.log(arguments)
    return a*b
}
console.log(process(3,8))
// OUTPUT : need to process 
//          24

/**
 * anonymous funtion in js: defined without name, & used once
 */
(function() {
    console.log('Hello Bhai')
}) () //<-function call

// OUTPUT : Hello Bhai