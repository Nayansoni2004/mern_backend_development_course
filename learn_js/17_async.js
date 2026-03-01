/**
 * Asynchronous processing
 */
console.log("Hello from first line")

setTimeout(() => { //call back function(async fn.)
    console.log("Hello from call back func.")
}, 3000)

console.log("Hello from last line")

// OUTPUT:
// Hello from first line
// Hello from last line
// Hello from call back func.