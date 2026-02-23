// declare variable in javascript using var keyword
var name

console.log(name) //undefined

//var declaration cum initialization
var age = 18 
console.log(age)

/*
##Conventions##
(1) name a variable range a-z/A-Z/0-9/_/$
(2) keywords (if, else, for...) not used for naming variable in javascript.
(3) no space between variable's name.
    ex: (a) first Name (<-not valid).
        (b) firstName (<-valid).$

##Guidelines/Suggestions##
(1) meaningful name should be given to a variable.

##Observations##
(1) variables are case-sensitive...vishwa, Vishwa, VIShwa (these three are treated different variables.) 
*/

// satisfying rules to variable
var hobby
var Nationality
console.log(Nationality) //undefined

var %country
console.log(%country)  //SyntaxError: Unexpected token '%'
