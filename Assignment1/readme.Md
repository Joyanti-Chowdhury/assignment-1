1 . What are some differences between interfaces and types in TypeScript?
Ans : The differences interfaces and types in Typescript are given below

     1.Though interfaces and types are used to define the object but they different in flexibility nd uses
     2.Type is more flexible then interface.
3.supports creating a new name for a type where In interface provides a way to define entities

3.In types dont support multiple merged declarations.But in interface support multiple merged declarations.

4.Types dont have implementation purpose but interface is used for implementation and extending in classes.

5.Unoin types does not support implementation or extending union types in types.Support implementing and extending union types in interfaces.


6. In types can create intersection types by  combing multiple types. Can crate intersection interfaces.

7. Primitive types ,tuples are used in types . primitive types can not be used with other types of declaration.

2.What is the use of the keyof keyword in TypeScript? Provide an example.
Ans :
The keyof keyword is used to get the all property name of given  type .It is a constructor which is used to a building block to create advanced type.

type person ={
name: string;
age:number;
}
Function getDetails<T, k extends  keyof T>(obj : T ,key : k) : T[k]{
return obj[key]
}

3.Explain the difference between any, unknown, and never types in TypeScript.

 the differences between any , unknown and never types 
Any : any types stops the type checking. We can do anything with an any type
Unknown : Unknown is similar to any. But it enforces type safety.
Never : Never types represents values that never occur. Never is used when we have exhausted all possible value answer dont have anything to assign  
