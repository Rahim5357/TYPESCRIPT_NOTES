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

// * BigInt Type

// ? It is a built-in type that allows you to work with numbers that are larger than the range supported by the rugular number type.

// ? BigInt literals are written by appending  the n suffix to an integer literal.

// ? In JS we can't read the whole numbers beyond 2 raise to power 53

// *  ANY Type

// ? The any type is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expressions it is applied to. 

// ? You will see any type when u first write the code 

// * Unkown Type 

// ? The unkown type is a safe alternative to any because it still enforces type checking and type safety.

// ? Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.
