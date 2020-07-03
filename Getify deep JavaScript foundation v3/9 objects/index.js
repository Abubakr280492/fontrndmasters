// // Recall: dynamic scope

// var teacher  = "kyle";

// function ask(question ){
//     console.log(teacher,question)
// }

// function otherClass(){
//     var teacher = 'Suzy';

//     ask("Why");
// }

// otherClass();  //kyly why 


//////////////////////////
//Dynamic Context ~ = JS's Dynamic Scope
// var teacher  = "kyle";
// function ask(question ){
//     console.log(this.teacher,question)
// }

// function otherClass(){
//     var myContext = {
//         teacher = 'Suzy'
//     };
//     ask.call(myContext,"Why?"); // Suzy Why   THIS-> myContext
// }

// otherClass();  



// // 4 ways 
// // first this: implicit binding

// var workshop = {
//     teacher: "Abdi",
//     ask(question){
//         console.log(this.teacher,question);
//     },
// };
// workshop.ask("what is implicit binding ?");


// // this:dynamic binding -> sharing
// //flexible i can use one function lots of time 
// function ask(question){
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "ABDI",
//     ask: ask,
// };


// var workshop2 = {
//     teacher: "KYLE",
//     ask: ask,
// };

// workshop1.ask("How do i share a method ?"); // ABDI How do i share a method ?
// workshop2.ask("How do i share a method ?"); // KYLE How do i share a method ?


// // 2nd way this: explicit binding 
// function ask(question){
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "ABDI",
//     ask: ask,
// };


// var workshop2 = {
//     teacher: "KYLE",
//     ask: ask,
// };

// ask.call(workshop1,"How doo i share a method ?"); // ABDI How doo i share a method ?
// ask.call(workshop2,"How doo i share a method ?"); // KYLE How doo i share a method ?

// //   this : hard binding 
// var workshop = {
//     teacher: "ABDI",
//     ask(question){
//         console.log(this.teacher,question);
//     } ,
// };


// setTimeout(workshop.ask,1000,"Lost this?");
// //undefined lost this ?
// setTimeout(workshop.ask.bind(workshop),2000,"Hard bound this?");  // hard bound function 
// //ABDI hard bound this






// //Constructor calls 
// //3rd way this: new binding 

// function ask(question){
//     console.log(this.teacher,question);
// }

// var newEmptyObject = new ask("What is 'new' doing here? ");
// //undefined What is 'new' doing here?


// //new keyword
// //1 breand new object 
// //2 new keywork links it
// //3 invokes function with this set 
// //4 if func doesn't return an object assume return of this 


// //4th this:default binding

// var teacher = "Kyle";
// function ask (question) {

//     console.log(this.teacher, question);
// }

// function askAgain (question) {
//     "use strict";
//     console.log(this.teacher, question);
// }

// ask("What's the non-strict-mode default?");
// //Kyle What's the non-strict-mode default?

// // askAgain("What's the strict-mode default?");
// //TypeError Cannot read property 'teacher' of undefined


// //Binding Precedence 


// //this determination 
// // 1. is the function called by new 
// // 2. is the function called by call() or apply()? Note: bind() effectively uses apply ()
// // 3. Is the function called on a context object? 
// //DEFAULT global object(except strict mode)



// //Arrow functions & LExical this

// //this: arrow function


// var workshop = {
//     teacher: "abdi ",
//     ask(question){
//         setTimeout(() => {
//            console.log(this.teacher, question); 
//         }, 100);
//     },
// };

// workshop.ask("Is this lexical ''this' ? ")

// //ONLY use => arrow function    when u need lexical 'this.'



//ES6 calss keyword


class Workshop {
    constructor(teacher){
        this.teacher = teacher; 
    }
    ask(question) {
        console.log(this.teacher,question);
    }
}

var deeepJS = new Workshop("Kyle");
var reactJS = new Workshop("SUzy");

deeepJS.ask("is 'class' a class? ");
reactJS.ask("is 'class' a OK? ");


//ES6 class: extends(ingeritance)


// class AnotherWorkshop extends Workshop{
  
//     SpeakUp(msg) {
//        this.ask(msg);
//     }
// }

// var JSresentParts = new AnotherWorkshop("ABDI");

// JSresentParts.SpeakUp("are classes getting better? ");
//ABDI are classes getting better? 




//ES6 class : super (relative polymorphism)
//refers to parent
class AnotherWorkshop extends Workshop{
  
    ask(msg) {
       super.ask(msg.toUpperCase());
    }
}

var JSresentParts = new AnotherWorkshop("Kyle");

JSresentParts.ask("are classes getting better? ");


