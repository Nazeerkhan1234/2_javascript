// NORMAL FUNCTION
 
function sayHi(){
    console.log('hi pepcoder')
} // FUNCTION Definition

sayHi() // FUNCTION INVOKATION

// Parameters
function add(a,b){
    console.log(a+b)
}
add(3,4) // Argument

// FUNCTION EXPRESSION
let sayhi = function (){
    console.log("khan bhai")
}
sayhi()

let sum = function(a,b){
    console.log(a+b)
}
sum(2,3)

//IIFE -> Immedeatly Invoked Function Expression
let sub = (function(a,b){
    console.log(a-b)
}(20,10))

