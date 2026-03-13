/**
 * normal functin
 */
// function getMessage() {
//     return 'Hello Students'
// }
// console.log(getMessage())

// OUTPUT: Hello Students




// async function sendMessage() { //when async keyword is added to fn. then it starts returning a Promise Object
//     return 'Hello Students'
// }
// console.log(sendMessage())

// OUTPUT : Promise { 'Hello Students' }



// // if you want to print Hello Students from Promise Object then...
// async function receiveMsg() {
//     return 'Hello Students'
// }

// receiveMsg().then(result => console.log(result))

// OUTPUT: Hello Students





/**
 * print Hello after a wait
 */
// function printHelloAfterWait() {
//     console.log('First Line')
//     setTimeout(() => {
//         console.log('Hello Students')
//     },3000)
//     console.log('Last Line')
// }

// printHelloAfterWait()

// OUTPUT:
// First Line
// Last Line
// Hello Students





console.log('Hello from beginning')
async function printingHelloAfterWait() {
    console.log('First Line')
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello Students')
        },3000)
    })
    let result = await data   //start waiting for the dataPromise to be completed
    console.log(result)
    console.log('Last Line')
}

printingHelloAfterWait()

console.log('Hello from End')

// OUTPUT:
// Hello from beginning
// First Line
// Hello from End
// Hello Students
// Last Line