


//Types

//Primitive Types
//Abstract Operation
//Coercion
//Equality
//TypeScript,Flow.ect


//Scope

//Nested Scope
//Hoisting
//Closure
//Modules

//Objects(Oriented)
//this
//clas{}
//Prototypes
//OO vs OLOO

 //Everying is an object  cuz most behave as an object

 //Primitive Types 
//Not Object

//  undefined  type
//  string 
//  Number
//  Boolean
//  Object
//  symbol
// null
// bigint(future)


// Objects


// undeclared?
// null?
// function?
// array?
//bigInt?


// typeop Operator   Primitive Types :typeOf

var v;
console.log(typeof v); //underfined

v="1";
console.log(typeof v); //string

v=2;
console.log(typeof v);//number

v = true;
console.log(typeof v); //boolean

v = {}
console.log(typeof v); //object

v= Symbol();
console.log(typeof v);// symbol


console.log('\n\n Guess what ??? \n\n');

//BIGINT

typeof doesnexist; //undefined 

var v =null;
console.log(typeof v);//  object OOPS!

v= function(){};
console.log(typeof v);// Function   hmm

v=[1,2,3];
console.log(typeof v);// object hmm 

//Kind of Emptiness
//undifined  vs. undeclared vs. uninitialized(aka TDZ)  two diffirent


//Special Values 
//NaN(not a nomber)  & isNaN

var myAge = Number("0o46"); //38
var myNextAge = Number("39"); //39
var myCatsAge = Number("n/a"); //NaN
myAge - "mt son's age"; //NaN

myCatsAge === myCatsAge; //false OOPS

isNaN(myAge); //false
isNaN(myCatsAge); //true
isNaN("my son's age"); //true OOPS

Number.isNaN(myCatsAge); //true
Number.isNaN("my son's age"); //false


//NaN: Invalid Number

// don't: undefined
// don't: null
// don't:false
// don't: -1
// don't: 0


//Negative zero
var trendRate = -0;
trendRate === -0; //true

trendRate.toString();// '0' OOPS
trendRate ===0; //true OOPS
trendRate <0; //false
trendRate> 0; //false

Object.is(trendRate,-0); //true
Object.is(trendRate,0); //false

Math.sign(-3); //-1
Math.sign(3); //1

Math.sign(-0); //-0  WTF
Math.sign(0); //0    WTF

//Let's fix it 
function sign(v){
    return v !==0 ? Math.sign(v):Object.is(v,-0) ? -1: 1;
}
Math.sign(-3); //-1
Math.sign(3); //1

Math.sign(-0); //-1
Math.sign(0); //1



function formatTrand(trendRate){
    var direction = 
    (trendRate < 0 || Object.is(trendRate, -0)) ? "DOWN" : "UP";
    return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrand(-3)); // down 3
formatTrand(3); // up 3
console.log(formatTrand(-0)); // down 0
formatTrand(0); // up 0 

// /Fundamental Objects
// USE new:   

//Object()
// Array()
// function()
// Date()
// RegExp()
// Error()

//Don't use new:

// String()
// Number()
// Boolean()

var yesterday = new Date ("June 14, 2020");
yesterday.toUTCString();

var myGpa = String(transcript.gpa);
//'3.2'
