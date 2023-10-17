// * Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types.

function genericsFunction<T>(ValueType: T) : T {
  return ValueType;
}

// ! In the place of T you can define your own Word or Letter

const numberResult:number = genericsFunction<number>(42);
const stringResult:string = genericsFunction<string>("Hello TypeScript");
const booleanResult:boolean = genericsFunction<boolean>(true);

// * Generics for Multi Data types

function genericsFunctionMultiDataType<T, U>(a: T, b:U, c:boolean): void{
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

const result1: void = genericsFunctionMultiDataType<number, string>(42, "Hello TypeScript", false);
const result2: void = genericsFunctionMultiDataType<string, boolean>("Hello TypeScript", true, false);
