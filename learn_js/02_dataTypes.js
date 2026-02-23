/**
 * primitives
 */

//******************String First Primitive dataType****************************

var name = "admin"

var title = 'Singh'

console.log(name)

console.log(typeof name) //tells the datatype of variable.

console.log(typeof(name)) 

// OUTPUT: D:\mern\backend>node 02_dataTypes.js
// admin
// string
// string

//******************Number Second Primitive dataType****************************
var age = 91
var x = 1.6

console.log(typeof x)

// OUTPUT : number

//BigInt

var big_num = 123n //<-n indicates prefix which is big Integer
console.log(typeof big_num)

// OUTPUT : bigint

console.log(typeof NaN)  //<-type of a number

//******************null Third Primitive dataType****************************

console.log(typeof null)

// OUTPUT : object

var college
console.log(typeof college)

// OUTPUT: undefined

//******************boolean Fourth Primitive dataType****************************

console.log(typeof true)

// OUTPUT : boolean

//******************Symbol Fifth primitive dataType****************************
var s1 = Symbol()
console.log(s1)

// OUTPUT : Symbol()


// ______________________________________________________________________________________________________________________________________________


/**
 * Non-Primitive: objects
 */  

var person = {
    name : "admin", //key-value pair
    age : 19,
    hobby : "Cricket"
}

console.log(person)

// OUTPUT : { name: 'admin', age: 19, hobby: 'Cricket' }
