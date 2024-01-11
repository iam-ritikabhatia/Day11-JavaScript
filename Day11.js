


function sayHello() {
return "Hello From sayHello Function" // This is the Entity which is return by the Function
}

sayHello(); // This means we are invoking(calling) the function sayHello

console.log(sayHello) // In this case the output is[Function: sayHello]


/***********************************/
function anotherHello() {
    return "Hello from anAnotherHello Function"
}
console.log(anotherHello) // In this case the output is Hello from anAnotherHello




/***********************************/

let HelloFunctionVariable = function () {
    return "Hello from HelloFunctionVariable"
}

console.log(HelloFunctionVariable) //In this Case the output is [Function: HelloFunctionVariable], because we are not invoking a variable which is basically a function 


/************************************/

let AnotherHelloFunctionVariable = function() {
    return "Hello From HelloFunctionVariable"
}
console.log(AnotherHelloFunctionVariable())// In this case the output is Hello from HelloFunctionVariable


