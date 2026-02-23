//que: checking whether the num is even or not.
var num = 21

if(num % 2 == 0) { //returns boolean result
    console.log("Even") //if block code..executed when result is only true
} else { //else always depends on if
    console.log("Odd")
}

console.log("after if")

/* OUTPUT : Odd
            after if */

// using ternary operator -> instead if-else
12%2 == 0 ? console.log("Even") : console.log("Odd")

// OUTPUT : Even

/**
 * Nested Conditionls
 */

var a = 10

if(a>=0) {
    if(a>5) {
        console.log('a is greater than 0 and 5')
    }else {
        console.log('a is greater than 0 but less than 5')
    }
}else {
    console.log('a is less than 0')
}

// OUTPUT: a is greater than 0 and 5


// trying upper code using ternary operator
var b = -1

b >= 0 ? b>5 ? console.log('b is greater than 0 and 5')
: console.log('b is greater than 0 but less than 5') : console.log('b is less than 0')

// OUTPUT : b is less than 0

/**
 * Switch
 */
var fruit = "Banana"

switch(fruit) {
    case "Apple":
        console.log("It's an apple")
        break
    case "Mango":
        console.log("It's a mango")
        break
    default :
        console.log("Not a valid fruit")
}
// OUTPUT : Not a valid fruit