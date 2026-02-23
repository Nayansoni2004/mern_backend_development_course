// OPERATION : WHEN OPERATOR IS APPLIED TO OPERANDS IS CALLED OPERATION.
/**
 * Assignment operators
 */

var name = "Nayan"

/**
 * Arithmetic operators
 */
console.log(4+5)  // OUTPUT : 9
console.log(4*5)  // OUTPUT : 20
console.log(4**5) //solving power, 4 to the power 5
// OUTPUT : 1024
console.log(12232133%13) //to find reminder 
// OUTPUT : 4

/**
 * Increment operator
 */
var i = 1
i = i + 1
console.log(i) //OUTPUT : 2

var j = 5
console.log(j++) //j = j + 1
console.log(j) //post Increment //OUTPUT : 6

var k = 8
console.log(++k)
console.log(k) //pre Increment //OUTPUT : 9 then 9


/**
 * Relational operator
 */
console.log(1==2) //Equality //OUTPUT : false

console.log(1=='1') //OUTPUT : true

//Strict equality check
console.log(1==='1') //OUTPUT : false

/**
 * Check the inequality
 */
console.log(1 != '1') //OUTPUT : false

console.log(1 !== '1') //OUTPUT : true

/**
 * Comparative operator
 */
console.log(3>=4) //OUTPUT : false

/**
 * Logical operators
 */
console.log(3<4 && true) //OUTPUT : true
console.log(3>4 && true) //OUTPUT : false

console.log(3>4 || true) //OUTPUT : true

console.log(true ^ true)  //returns : 0 <-means false.
console.log(true ^ false) //returns : 1 <-means true.

/**
 * Bitwise operator : The Numbers Are Converted Into Bit Notations...
 */
console.log(10 & 6) //OUTPUT : 2 

console.log(10|6) //OUTPUT : 14