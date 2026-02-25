/**
 * String datatype : sequence of characters & is immutable
 */

let name = 'Drishti'

let city = "Satna"

console.log(name , city)
console.log(typeof name)
// OUTPUT :
// Drishti Satna
// string

/**
 * Accessing character based on index
 */
console.log(name[0])

console.log(name[3])
// OUTPUT :
// D
// s

console.log(name[11])
// OUTPUT : undefined


/**
 * String datatype is immutable
 */
name[2] = 'A'
console.log(name)
// OUTPUT : Drishti <-change nhi hua bec-string is immutable


/**
 * 
 * Methods of String
 */
//1. length of the string
console.log(name.length)
// OUTPUT : 7

//2. concat method
let first_name = "Prayank"
let last_name = "Soni"

let full_name = first_name.concat(last_name)
console.log(full_name)

console.log(first_name + last_name)
// OUTPUT : 
// PrayankSoni
// PrayankSoni

/**
 * to upper case method
 */
console.log(full_name.toUpperCase())
// OUTPUT : PRAYANKSONI

/**
 * to lower case method
 */
console.log(full_name.toLowerCase())
// OUTPUT : prayanksoni



/**
 * Character at any index str[i]
 */
console.log(name.charAt(3))
// OUTPUT : s


/**
 * slicing concept in javascript
 */
console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))
// OUTPUT : 
// PrayankSoni
// ayankSoni
// aya
// kSoni
// kSon

/**
 * 
 * indexOf method
 */
console.log(name.indexOf('h'))
// OUTPUT : 4 <-for Drishti
// note: -1 if index does'nt exists

/**
 * 
 * trim
 */
let word = " Nayan "
console.log(word)
console.log(word.trim())
// OUTPUT : Nayan me spacing trim ho gyi h 
//  Nayan
// Nayan

/**
 * split
 */
name = "Vishwa Mohan Singh"

console.log(name.split(" ")) //return array of type string
// OUTPUT : [ 'Vishwa', 'Mohan', 'Singh' ]