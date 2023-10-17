// * In TypeScript, tuple are a data structure that allows you to store a fixed-size  collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at at the time of creation. whereas arrays can hold elements of the same type, and their size can vary.

// ? Real-life example of using tuples in TypeScript:

// ? Let's consider a scenario where you want to represent a person's basic inforamation, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.

// Defining a tuple type for person information
type PersonDetails = readonly [string, number, boolean]

// function to display person inforamtion
const displayPerson: (person:PersonDetails) => string = (person:PersonDetails):string => {
  const [name, age, hasDriverLicense] = person;
  return `Name: ${name}, Age: ${age}, Has Driver License: ${hasDriverLicense}`

}

// Example usage
const person1: PersonDetails = ['abdull', 26, true]
const person2: PersonDetails = ['rahim', 12, false]

console.log(displayPerson(person1));
console.log(displayPerson(person2));
