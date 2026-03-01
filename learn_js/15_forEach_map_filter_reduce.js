/**
 * forEach method 
 */

players = ["Sachin", "Virat", "Ms Dhoni", "Bumra"]

players.forEach((player) => console.log(player)) //forEach is HOF (prints all ele. of array one by one)
// OUTPUT:
// Sachin
// Virat
// Ms Dhoni
// Bumra




/**
 * map -> Creation of new transformed array
 */
arr = [1,2,3,4,5,6]

cube_arr = arr.map(num => num**3)

console.log(cube_arr) //this create new array which contain cubes of elements.
console.log(arr) //hence original is not modified

// OUTPUT:
// [ 1, 8, 27, 64, 125, 216 ]
// [ 1, 2, 3, 4, 5, 6 ]





/**
 * filter is (HOF)
 */
let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_arr = arr1.filter((num) => num%2 == 0)
console.log(even_arr)

// OUTPUT: 
// [ 2, 4, 6, 8, 10 ]




/**
 * reduce (HOF)
 */
const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curent, next) => curent+next)
console.log(sum)

// OUTPUT: 55