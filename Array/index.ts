// Arrays in TypeScript come with built-in methods that allow you to perform common operations

// const fruits = ["apple", "banana", "orange", "mango"];

// ! Adding elements to an array using push:
// const newUpdatedFruits = fruits.push("Kiwi");
// console.log(newUpdatedFruits);
// console.log(fruits)

// * Object

// const person:{
//     name:string,
//     age:number,
//     isStudent:boolean,
//     address:{city:string; state:string}
// } = {
//     name:"Abdulla",
//     age:20,
//     isStudent:false,
//     address:{
//         city:"Nellore",
//         state:"AP"
//     }
// }

// * What is Type alias

//In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, orgnization, and abstraction of complex types.

// To define a type alias, you use the type keyword followed by the alias name and type definition:
// type Person = {
//     name:string,
//     age:number,
//     isStudent:boolean,
//     class?:string  //optional Properties
//     address:{city:string; state:string}
// }
// const person1:Person = {
//     name:"Abdulla",
//     age:20,
//     isStudent:false,
//     address:{
//         city:"Nellore",
//         state:"AP"
//     }
// }

// const person2:Person = {
//     name:"Abdulla",
//     age:20,
//     isStudent:false,
//     address:{
//         city:"Nellore",
//         state:"AP"
//     }
// }
