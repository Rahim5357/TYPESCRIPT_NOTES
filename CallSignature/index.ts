// * The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines teh structure and type information of a fucntion without including the function's implementation or body.

//? Let's add one function inside the object. It's more like creating a method in object.

//? Very Inportant => call signature are typically used inside object type notations to describe the shape of functions within the object.

// type Student = {
//   name: string;
//   age: number;
//   gender?: string
//   greet: (county:string) => string; //! method call signature
//   (county:string):string  //! call signature
// }

// const student:Student = {
//   name: "Abdulla",
//   age: 24,
//   greet: (county:string) => `I am from ${county}`
//    
// }

// console.log(student.greet("India"));
// console.log(student(county: "Nepal"))