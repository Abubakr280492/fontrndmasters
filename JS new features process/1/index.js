//destructing: imperrative

var tmp = getSomeRecord();

var first = tmp [0];
var second = tmp [1];

var firstName = first.name;
var firstEmail = first.email !== undefined? first.email:"nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== underfied ?
 second.email:
 "nobody@none.tld";

 //destructing: declarative
// declared patern
 var [
     {
        name: firstName,
        email: firstEmail = "nobody@none.tld"
     },
     {
        name: secondName,
        email: secondEmail = "nobody@none.tld"
     }

 ] = getSomeRecord();


 //imperative approach

function data(){
   return [1,2,3];
}
var tem = data();
var first= tem[0];
var second= tem[1];
var third= tem[2];

//destructuring approach 

function data(){
   return[1,2,3];
}
var [
   first,
   second,
   third
] = data();  //squre braket is my pattern


 //imperative approach

 function data(){
   return [1,2]; //undefined
}
var tem = data();
var first= tem[0];
var second= tem[1];
var third= tem[2];



 //imperative approach

 function data(){
   return [1,2,3,4]; //nothing get ignored
}
var tem = data();
var first= tem[0];
var second= tem[1];
var third= tem[2];


 //imperative approach

 function data(){
   return [1,,3,4]; //nothing get ignored
}
var tem = data();
var first= tem[0];
var second= tem[1] !==underfied ? tem[1] :10;
var third= tem[2];

var [
   first,
   second = 10, //if underfined assign by default to 10 
   third
] = data();  //squre braket is my pattern



 //imperative approach
//gather the rest 4 and 5 
 function data(){
   return [1,2,3,4,5]; 
}
var tem = data();
var first= tem[0];
var second= tem[1];
var third= tem[2];
var fourth = tmp.slice(3);//empty array  if no 3,4

//destruction 

function data(){
   return [1,2,3,4,5]; 
}

var [
   first,
   second,
   third,
   ...fourth  //gater the rest in fourth  very end of all
] = data();  

//Spread OPeration & Declaring Destructed Arrays 

function data(){
   return [1,2,3]; 
}
var tem = data();
var first= tem[0];
var second= tem[1];
var third= tem[2];
var fourth = tmp.slice(3);//empty array  if no 3,4

//destruction 

function data(){
   return [1,2,3]; 
}
var [
   first,
   second,
   third,
   ...fourth  //gater the rest in fourth  very end of all
] =  tem = data(); 

//declaration and assignment

function data(){
   return [1,2,3]; 
}
var tem = data();
var first,second,trird,fourth;

first= tem[0];
second= tem[1];
third= tem[2];
fourth = tmp.slice(3);
///////////////////////////////////////
function data(){
   return [1,2,3]; 
}
var tem;
var first,second,trird,fourth;
[
   first,
   second,
   third,
   ...fourth  //gater the rest in fourth  very end of all
] =  tem = data(); 

///////////////////////////////////////////////////////////

function data(){
   return [1,2,3]; 
}
var tem = data();
var o ={};  //equal to object 

o.first= tem[0];
o.second= tem[1];
o.third= tem[2];
o.fourth = tmp.slice(3);
///////////////////////////////////////
function data(){
   return [1,2,3]; 
}
var tem;
var o = {};
 [
   o.first,
   o.second,
   o.third,
   ...o.fourth  //gater the rest in fourth  very end of all
] =  tem = data(); 
////////////////////////////////////////////////////////////
//array
function data(){
   return [1,2,3]; 
}
var tem = data();
var o =[];  //equal to array 

o[3]= tem[1];
o[22]= tem[2];
o[33] = tmp.slice(3);
///////////////////////////////////////
function data(){
   return [1,2,3]; 
}
var tem = data();
var o = [];
 [
   o[3],
   o[22],
   ...o[33]

] = tem; 

/////////////////////////////////////////////////////////////////
//declation

function data(){
   return [1,2,3]; 
}
var tem = data();
var o =[];  //equal to array 

o[3]= tem[1];
o[22]= tem[2];
o[33] = tmp.slice(3);
///////////////////////////////////////
function data(){
   return [1,2,3]; 
}
var tem;
var o = [];
[
    o[3],
   o[22],
   ...o[33]

] = tem =data(); 

////////////////////////////////////////////////////////////////
//comma separation 

function data(){
   return [1,2,3]; 
}
var tem = data();

var first= tem[0];
// var second= tem[1];
var third= tem[2];
var fourth = tmp.slice(3);

//destruction 

function data(){
   return [1,2,3]; 
}
var tem;

var [
   first,
   ,
   third,
   ...fourth
] =  tem = data(); 



var x = 10;
var y =20;
{
   let tem = x;
   x=y;
   y=tmp;
}


//destructureing
var x = 10;
var y =20;
[y,x] = [x,y];

/////////////////////////////////////////////////////////
//parametr array 

function data(tmp){
   var [
      first,
      second,
      trird
   ]= tmp;
}

//destructuring 
function data([
   first,
   second,
   third
]){
   //..
}



function data(){
   return null; 
}
var tem = data() || [];

var first= tem[0];
var second= tem[1];
var third= tem[2];
var fourth = tmp.slice(3);

//destruction 

function data(){
   return null; 
}
var tem;

var [
   first,
   second,
   third,
   ...fourth
] =  tem = data() || [];  //default fall back

//parametr passing in 
function data(tmp =[]){
   var [
      first,
      second,
      third
   ] = tmp;
}
///////////////////
function data([
   first,
   second,
   third
] = []){
   //...
}

///////////////////////////////////////////////////////////
//nested array destructuring

function data(){
   return [1,[2,3],4]; 
}
var tem = data() || [];

var first= tem[0];
var tem2 = tmp[1];
var second= tem2[0];
var third= tem2[1];
var fourth = tem[2];  

//destruction 

function data(){
   return [1,2,3]; 
}
var tem;

var [
   first,
   [
   second,
   third]
   ,
   fourth
] =  tem = data() || []; 


///////////////////////

function data(){
   return [1,undefined,4]; 
}
var tem = data() || [];

var first= tem[0];
var tem2 = tmp[1] || [];
var second= tem2[0];
var third= tem2[1];
var fourth = tem[2];  

//destruction 

function data(){
   return [1,2,3]; 
}
var tem;

var [
   first,
   [
   second,
   third
   ] = [],
   fourth
] =  tem = data() || []; 


///////////////////////////////////////////////////////////
//object destructuring
function data() {
   return {a:1, b:2, c:3}; 
}

var tem = data();

var first = tem.a;
var second = tem.b;
var third = tem.c;
///////////////////////destructiring 
function data() {
   return {a:1, b:2, c:3}; 
}

var {
   a: first=43,  //here in object position doesnt matter 
   b: second, //just tell source that assigned 
   c: third//a property name assigned to varible called first  
        //source : target = default 
}= data();  //if array position matter if object doesnt matter 

var o = {
   prop: value,
   target : source
};
//destructuring
var {
   prop: value,
   source: target
} = o;

//object assignment destructuring 
function data() {
   return {a:1, b:2, c:3}; 
}

var tem = data();
var first , second;
first = tem.a;
second = tem.b;
/////////////////
function data() {
   return {a:1, b:2, c:3}; 
}

var first , second;

({
   a: first,
   b: second   
} = data());    //bracket says it is not block
 
 //or

function data() {
   return {a:1, b:2, c:3}; 
}
var tem;
var first , second;

tem = {
   a: first,
   b: second   
} = data(); 

///////////////////////////////////////////////////
//Object Default Assignment 

function data() {
   //return {a:1, b:2, c:3}; 
   return;  
}

var tem = data() || {};

var first = tem.a;
var second = tem.b;
///////////////////////destructiring 
function data() {
   return; // {a:1, b:2, c:3}; 
}

var {
   a: first, //if same name you can do just    a = a:a
   b: second,  
}= data() || {};


////////////////////////////////////////////////////
//Nested Object Destructuring 

function data() {
   return {
      a:1,
      b: {
         c:2,
         d:5
      },

   };
}

var tem = data() || {};

var a = tem.a;
var b = tem.b || {};
var c = b.c;
var d = b.d;

///////////////////////destructiring 

function data() {
   return {
      a:1,
      b: {
         c:2,
         d:5
      },

   };
}

var {
   a,
   b: {
      c,
      d
   } = {}
}= data() || {};  //use eslint bro npm install --save-dev eslint
   