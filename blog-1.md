1. The significance of union and intersection types in Typescript.
 
 Union types:
A union type allows a value to be one of several types. A union types multiple types allowed .  For instance, a function that accepts number | string can handle various user inputs without additional overloads. A value can be of any one of the types specified. Union types symble  “ | ”.
Example:
function formatInput(input: string | number): string {
 if (typeof input === 'string') {
 return `String: ${input}`;
 }
 else {
 return `Number: ${input}`; } 
}
 console.log(formatInput("Hello"));

 intersection Types:
 An intersection type combines multiple types into one. A value of this type must satisfy all the combined types.intersection  Types symble  “&”. A value must have all the properties of the types combined.
   function formatInput(input: string & number): string {
 if (typeof input === 'string') {
 return `String: ${input}`;
 }
 else {
 return `Number: ${input}`; } 
}
 console.log(formatInput("Hello"));