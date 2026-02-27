arr = [1,2,3]

console.log(typeof arr); // OUTPUT : object

arr1 = new Array()

console.log(typeof arr1) // OUTPUT : object

console.log(arr1) // OUTPUT : []


arr = [1,2,3,4,9,8,6,543,2,2,1123]

console.log(arr[0]) // OUTPUT : 1

console.log(arr[7]) // OUTPUT : 543

console.log(arr[21]) // OUTPUT : undefined

console.log(arr[-1]) // OUTPUT : undefined

/**
 * Arrays are mutable. we can modify the arrays
 */
arr[1] = 200
console.log(arr)

// OUTPUT : [
//     1, 200,    3,   4,
//     9,   8,    6, 543,
//     2,   2, 1123
//   ]

/**
 * Insert items in the arrays
 */

arr = [5,6,8,2,212,3,4,45]
console.log(arr)

arr.push(11)
console.log(arr)

arr.push(99,234,345)
console.log(arr)

// OUTPUT : [
//     5,   6,  8,  2, 212,
//     3,   4, 45, 11,  99,
//   234, 345
// ]

/**
 * unshift method to add elements from beginning of arrays
 */
arr.unshift(999)
console.log(arr)

arr.unshift(9,99,9999)
console.log(arr)

// OUTPUT : 
// [
//     9, 99, 9999, 999,   5,
//     6,  8,    2, 212,   3,
//     4, 45,   11,  99, 234,
//   345
// ]

/**
 * Removing elements
 */
//pop method
let arr = [2,334,556,778,89,43]

console.log(arr.pop())
console.log(arr)

// OUTPUT : 
// 43
// [ 2, 334, 556, 778, 89 ]

//shift
console.log(arr.shift())
console.log(arr)

// OUTPUT : 
// 2
// [ 334, 556, 778, 89 ]

/**
 * concat to add two arrays
 */

let a1 = [12,34,56]
let a2 = [2,67,90]

let r = a1.concat(a2)
console.log(r) 
// OUTPUT : [ 12, 34, 56, 2, 67, 90 ]

/**
 * size of the arr
 */
console.log(a1.length) // OUTPUT : 3

/**
 * convert array into strings
 */
char_arr = ['V', 'i', 's', 'h', 'w', 'a',' ', 'M', 'o', 'h', 'a', 'n']

//join
console.log(char_arr.join()) // OUTPUT : V,i,s,h,w,a, ,M,o,h,a,n
console.log(char_arr.join("")) // OUTPUT : Vishwa Mohan
console.log(char_arr.join('$')) // OUTPUT : V$i$s$h$w$a$ $M$o$h$a$n
  
console.log(typeof char_arr.toString()) // OUTPUT : string

/**
 * Slicing of the arrays
 */

let nums = [3,4,5,67,8,90,234,67,33,54,22]

console.log(nums.slice(2))
console.log(nums.slice(2,7))
console.log(nums.slice(5,-1))
console.log(nums.slice(-9,-2))
console.log(nums.slice(2,-1))

// OUTPUT : 
// [
//     5, 67,  8, 90, 234,
//    67, 33, 54, 22
//  ]
//  [ 5, 67, 8, 90, 234 ]
//  [ 90, 234, 67, 33, 54 ]
//  [
//      5, 67,  8, 90,
//    234, 67, 33
//  ]
//  [
//      5, 67,  8, 90,
//    234, 67, 33, 54
//  ]

console.log(nums) //slicing does not make any change in the existing array

// OUTPUT : 
// [
//     3,   4,  5, 67,  8,
//    90, 234, 67, 33, 54,
//    22
//  ]


/**
 * splicing, which modifies the original array
 */
let numbers = [1,2,4,5,67,89,90]
let removed = numbers.splice(2,3)
console.log(removed)
console.log(numbers)

// OUTPUT : 
// [ 4, 5, 67 ]
// [ 1, 2, 89, 90 ]

let number = [1,2,4,5,67,89,90]
let remove = number.splice(2,3,11,12,13)
console.log(remove)
console.log(number)

// OUTPUT : 
// [ 4, 5, 67 ]
// [
//    1,  2, 11, 12,
//   13, 89, 90
// ]

/**
 * Reverse a given array
 */
let num = [4,1,34,67,89,28,65]
num.reverse()
console.log(num)
// OUTPUT : 
// [
//     65, 28, 89, 67,
//     34,  1,  4
//   ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let n = [34,56,88,90,45,67,54]
console.log(n.indexOf(45)) // OUTPUT : 4 & -1 if element does'nt exists in an array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let m = [2,34,57,88,54,22,54]
console.log(m.indexOf(4)) // OUTPUT : -1



/**
 * sorting the array
 */
let my_arr = [6,5,4,3,2,1]

my_arr.sort()

console.log(my_arr) // OUTPUT : [ 1, 2, 3, 4, 5, 6 ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let sec_arr = [9,6,8,4,2,3]

sec_arr.sort()

console.log(sec_arr) // OUTPUT : [ 2, 3, 4, 6, 8, 9 ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let third_arr = [23,45,75,32,21,12,34]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
third_arr.sort((a,b)=> a-b)

console.log(third_arr) 
// OUTPUT : 
// [
//     12, 21, 23, 32,
//     34, 45, 75
//   ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let fourth_arr = [12,43,21,32,18,15]

fourth_arr.sort((a,b)=>b-a)

console.log(fourth_arr) // OUTPUT : [ 43, 32, 21, 18, 15, 12 ]