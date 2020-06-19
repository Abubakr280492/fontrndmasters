//Scope 

//Nested Scope 
//Hoisting
//Closure
//Modules 

x = 42;
console.log(y);

//maching  green marble goes to green buckets  Scope sorting marbles 

var teacher = 'kyle';

function otherClass(){
    teacher = "Suzy";
    topic = "React";
    console.log("Welcome");

}

otherClass(); // welcome
teacher; //Kyle
topic;//React