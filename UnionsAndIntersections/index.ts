// * Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type. In

// ? In TypeScript. when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties Failure to do so will result in a type error during compilation.

// Example union
const inputValue: (value: string | number | boolean) => void = (value: string | number | boolean): void => {};

inputValue(25);
inputValue("Input Value");
inputValue(true);

// * Intersection types allow you to combine multiple types into a single type. Your use the & (ampersand) symbol to define a intersection type.

type Person = {
  name: string;
  age: number;
}

type Employee = {
  emp_id: number;
  department: string;
}

// Example uniom
type EmployeeDetailsUnion = Person | Employee;
const unionEmployee: EmployeeDetailsUnion = {
  name: "Employee Name",
  age: 25,
  }
// ! in case of union any one of the type properties is enough

// Example Intersection
type EmployeeDetailsIntersection = Person & Employee;
const intersectionEmployee: EmployeeDetailsIntersection = {
  name: "Employee Name",
  age: 25,
  emp_id: 256356,
  department: "Department",
}
// ! in case of intersection any one of the type properties is not enough