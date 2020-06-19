// not declaration it is Function expression 
//Anonomous function 
var clickHandler = function(){

}


//name function expression 
var keyHandler = function keyHandler(){

};

// named Function expression: benefits 

// 1  Reliable function self-reference
// 2 More debuggable stack traces
// 3 Moreself-documenting code 

 // Anonymous Arrow functions vs. Named func exp
 var ids = people.map(person => person.id);

 var ids = people.map(function getId(person){
     return person.id;
 })