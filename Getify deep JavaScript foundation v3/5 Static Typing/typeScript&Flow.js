//TypeScripy Flow and type-aware linting 

//Benefits :

// 1 Catch type-related mistakes
// 2 communicate type intent
// 3 Provide IDE feedback


//Caveats
// 1 Interencing is best-guess, not a guarantee
// 2 Annotations are optional
// 3 Any part of the application that isn't typed introduces uncertainty 




//TypeScript & Flow

//Type-Aware Linting: inferencing
var teacher = 'Kyle';
//..

//var teacher: String = 'Kyle';


teacher = {name:"Kyle"};
//Error : can't assign object to string 


//Type-Aware Linting: custom types & signatures 

// type student = { name: string };

// function getName(studentRec: student): string {
//     return studentRec.name;
// }

// var firstStudent: student = {name: "Frank"};

// var firstStudentName: string = getName(firstStudent);


// //Flow
// function fooGood<T: { x: number }>(obj: T): T {
//   console.log(Math.abs(obj.x));
//   return obj;
// }

// //TypeScript
// function fooGood<T extends { x: number }>(obj: T): T {
//     console.log(Math.abs(obj.x));
//     return obj;
//   }


//   //maybe & nullable type
// //Flow
// let a: ?string

// // equivalent to:

// let a: string | null | void


// //TypeScript
// let a: string | null | undefined

// //Optional parameters implicitly add undefined:

// function f(x?: number) { }
// // is semantically the same as:
// function f(x: number | undefined) { }
// // and also same as (the `| undefined` is redundant):
// function f(x?: number | undefined) { }
// Optional properties implicitly add undefined

// class A {
//   foo?: string;
// }


// type casting
// Flow
// (1 + 1 : number);
// TypeScript
// (1 + 1) as number;

// // OR (old version, not recommended):

// <number> (1 + 1);
// mapping dynamic module names
// Flow
// .flowconfig

// [options]
// module.name_mapper='^\(.*\)\.css$' -> '<PROJECT_ROOT>/CSSModule.js.flow'
// CSSModule.js.flow

// // @flow

// // CSS modules have a `className` export which is a string
// declare export var className: string;
// TypeScript
// declare module "*.css" {
//   export const className: string;
// }
// Reference
// https://www.typescriptlang.org/docs/handbook/modules.html
// https://flow.org/en/docs/types/modules/
// Exact/Partial Object Types
// By default objects in Flow are not exact, i.e. they can contain more properties than declared, whereas in TypeScript they are always exact (must contain only declared properties). In future versions Flow plans to change this and make objects exact by default.

// Flow
// When using flow, { name: string } only means “an object with at least a name property”.

// type ExactUser = {| name: string, age: number |};
// type User = { name: string, age: number };
// type OptionalUser = $Shape<User>; // all properties become optional
// TypeScript
// TypeScript is more strict here, in that if you want to use a property which is not declared, you must explicitly say so by defining the indexed property. It is possible to use dotted syntax to access indexed properties since TypeScript 2.2. This is mostly a design decision as it forces you to write the typings upfront.

// type ExactUser = { name: string, age: number };
// type User = { name: string, age: number, [otherProperty: string]: any };
// type OptionalUser = Partial<ExactUser>; // all properties become optional
// Reference
// https://flow.org/en/docs/types/objects/
// https://github.com/Microsoft/TypeScript/issues/2710
// Importing types
// Flow
// import type {UserID, User} from "./User.js";
// // equivalent:
// import {type UserID, type User} from "./User.js";
// TypeScript
// TypeScript does not treat Types in any special way when importing.

// import {UserID, User} from "./User.js";
// typeof
// Works the same in both cases, however Flow has an additional syntax to directly import a typeof:

// Flow
// import typeof {jimiguitar as GuitarT} from "./User";

// // OR

// import {typeof jimiguitar} from "./User.js";
// type GuitarT = jimiguitar;

// // OR (below also works in TypeScript)

// import {jimiguitar} from "./User.js";
// type GuitarT = typeof jimiguitar;
// TypeScript
// import {jimiguitar} from "./User";
// type GuitarT = typeof jimiguitar;
// Restrictive type
// When you don't know a type, commonly you would use any type. A restrictive type accepts anything, like any but in order to use that variable you must ensure values type by refining it.

// Flow
// mixed

// function stringifyNum(num: number) {
//   // Do stuff
// }

// function stringify(value: mixed) {
//   if (typeof value === 'string') {
//     return '' + value; // Works!
//   }
//   if (typeof value === 'number') {
//     return stringifyNum(value); // Works!
//   }
//   return '';
// }
// Reference: https://flow.org/en/docs/types/mixed/

// Typescript
// unknown

// function stringifyNum(num: number) {
//   // Do stuff
// }

// function stringify(value: unknown) {
//   if (typeof value === 'string') {
//     return '' + value; // Works!
//   }
//   if (typeof value === 'number') {
//     return stringifyNum(value); // Works!
//   }
//   return '';
// }
// Reference: https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#new-unknown-top-type

// Accessing the type of a Class
// Classes are typed, so you don't need to define an explicit type for them. If you want to reference the type, you can do it the following way:

// Flow
// class Test {};
// type TestType = typeof Test;

// const instance = new Test();
// type TestTypeFromInstance = Class<typeof instance>;
// TypeScript
// class Test {};
// type TestType = typeof Test;
// Nominal typing
// Flow treats classes as nominal types, whereas TypeScript treats them as structural types.

// Flow
// class Foo {};
// class Bar {};

// const foo: Foo = new Bar();
// // Cannot assign `new Bar()` to `foo` because `Bar` [1] is incompatible with `Foo` [2].
// TypeScript
// class Foo {};
// class Bar {};

// const foo: Foo = new Bar();
// // No errors!
// You can work around this with tricks like the following (declare only works in TypeScript >=3.7.0):

// class Foo {
//     declare private __nominal: void;
// };
// class Bar {
//     declare private __nominal: void;
// };

// const foo: Foo = new Bar();
// // Type 'Bar' is not assignable to type 'Foo'.
// // Types have separate declarations of a private property '__nominal'.(2322)
// Keys/Props Of Type
// Flow
// var props = {
//   foo: 1,
//   bar: 'two',
//   baz: 'three',
// }

// type PropsType = typeof props;
// type KeysOfProps = $Enum<PropsType>;

// function getProp<T>(key: KeysOfProps): T {
//   return props[key]
// }
// TypeScript
// var props = {
//   foo: 1,
//   bar: 'two',
//   baz: 'three',
// }

// type PropsType = typeof props
// type KeysOfProps = keyof PropsType;

// function getProp<T>(key: KeysOfProps): T {
//   return props[key]
// }
// Records
// Flow
// type $Record<T, U> = {[key: $Enum<T>]: U}
// type SomeRecord = $Record<{ a: number }, string>
// TypeScript
// type SomeRecord = Record<{ a: number }, string></T>



//https://github.com/niieani/typescript-vs-flowtype>

// pros

//much more obvious
// popular 

//Cons

//they use non-JS-standard syntax
//require buld process