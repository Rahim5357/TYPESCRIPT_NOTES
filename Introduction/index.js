/*
TypeScript catches errors at compile time instead of runtime , which makes debugging easier and reduces the likelihoodd of bugs in production.
*/
// var Value:number = 5;
// console.log(Value);
// ? Introduction To Types in TypeScript
// * In TypeScript, type annotation is a way of explicitly specidying the type of a variable, function parameter, or function return value.
// ? Type anotaions are expressed by using a colon (:) followed by the desired type after the variable or function parameter declaration. There can be a space after the colon.
// var myFavNum:number = 5;  
// * Number Type 
// ? The number type represents numberic values, including integers and floating-point numbers.
// * String Type
// ? Any value under single of double quotes are treated as strings, Also any exp. Result string as output
// * Boolean Type
// ? In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.
var isEven = function (MyNum) {
    if (MyNum % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(5));
console.log(isEven(10));
