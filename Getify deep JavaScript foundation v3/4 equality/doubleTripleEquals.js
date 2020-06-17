

var a = {
    name: "deep"
};

var b = {
    name: "deep"
};


if (a ==b ){
    //nope
}
if (a === b ){
    //nope
}

// if type is different 

// x = null && y = underfined returns true

var a = {topic:null};
var b = {};

if((a.topic ===null || a.topic === undefined) &&( b.topic ===null || b.topic === undefined)
){
        //..
}

if (a.topic = null &&b.topic==null){
    //..
}


//https://eslint.org/  fix prob in js

// x type is number    y =string returns x == ToNumber(y)
// x type is string    y =number returns ToNumber(x) == y


//Coercive Equality: prefers numeric comparisoon 
var a = 16;
var b = workelem.value;

if (Number(a)===Number(b)){
 //..
}

if(a==b){
    //..
}

// Coercive Equality : only primitives 

//if type string Number or Symbol  and   type(y) is Object, return the result of comparision x == ToPrimitive(y)
// ii vise versa result of camparision ToPrimitive(x) == y

// var a =42;
// var b =[42];

// if(a==b){}
// if(42=='42'){}
// if(42===42){}

// if (true){
//     //Yep (hmm...)
// }

// == Summary :
//If the types are the same: ===
// if null or undefined: equal
//If non-primitives: ToPrimitive
// Prefer: ToNUmber


// == CORNER CASES
var a = [];
var b = [];
[] == ![]  //true WHAT ?
//if (a == !b)
//if([]==false)
//if ('' == false)
//if (0 == false)
//if (0 == 0)
//if (true){ }

//if (a != b)
// if(!(a ==b))
// if(!(false)){}
if(true){  }


// == corner CASES: bolleans

var a = [];

if(a){
    // array not in the table therefore true    yep
    //if (boolean(a))
    
}


if (a == true) {
    //Nope 
   //if ("" == true)
   //if (0 === 1)
   if (false){
       //nope
   }


}


if (a == false) {
    //yep 
    //if ("" ==false)
    //if (0 === 0)
    if(true){
        //Yep ;()
    }
}
