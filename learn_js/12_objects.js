/**
 * Object declaration in javascript
 */
const user = {
    name : "Rajesh",
    age : 16,
    city : "Bangalore"
}

/**
 * Accessing the data
 */
console.log(user.name);
console.log(user['name'])
// OUTPUT : 
// Rajesh
// Rajesh

/**
 * Adding the data to the object
 */

user.country = "India"
user["continent"] = "Asia"
console.log(user);
// OUTPUT : 
// {
//     name: 'Rajesh',
//     age: 16,
//     city: 'Bangalore',
//     country: 'India',
//     continent: 'Asia'
//   }

/**
 * Deleting object keys and  object itself
 */
delete user.country
console.log(user)
// OUTPUT : { name: 'Rajesh', age: 16, city: 'Bangalore', continent: 'Asia' }

delete user['continent']
console.log(user)
// OUTPUT : { name: 'Rajesh', age: 16, city: 'Bangalore' }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let person = {
    name : "Rajesh",
    age : 90,
    address : {
        city : "jabalpur",
        state : "madhya pradesh",
        country : "India"
    }
}

for ( let key in person) {
    console.log(key, " => ", person[key]);
}
// OUTPUT : 
// name  =>  Rajesh
// age  =>  90
// address  =>  { city: 'jabalpur', state: 'madhya pradesh', country: 'India' }

console.log(Object.keys(person))
// OUTPUT : [ 'name', 'age', 'address' ]

console.log(Object.values(person))
// OUTPUT :
// [
//     'Rajesh',
//     90,
//     { city: 'jabalpur', state: 'madhya pradesh', country: 'India' }   
//   ]

/**
 * Get both keys & the values
 */
console.log(Object.entries(person))
// OUTPUT : 
// [ 'name', 'Rajesh' ],
// [ 'age', 90 ],
// [
//   'address',
//   { city: 'jabalpur', state: 'madhya pradesh', country: 'India' } 
// ]
// ]

/**
 * 
 * Cloning an Object using assign
 */
const new_person = Object.assign({}, person)
console.log(new_person)
// OUTPUT :
// {
//     name: 'Rajesh',
//     age: 90,
//     address: { city: 'jabalpur', state: 'madhya pradesh', country: 'India' }
//   }

/**
 * Adding new features to the clone object
 */
const new_person_1 = Object.assign({}, person, {role: "Developer"})
console.log(new_person_1) 
// OUTPUT :
// {
//     name: 'Rajesh',
//     age: 90,
//     address: { city: 'jabalpur', state: 'madhya pradesh', country: 'India' },
//     role: 'Developer'
//   }