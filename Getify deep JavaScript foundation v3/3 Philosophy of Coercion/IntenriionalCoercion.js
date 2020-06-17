


//A qualitty Js program embraces coercions, making sure hte types involved in every operation are clear. Thus,corner cases are safely managed.
//  no type rigidity , Static Types,  type soundness


//JavaScripd's dynamic typing is not a weakness, it.s one of its strong qualities

// Implicit != Magic 
// Implicit != Bad
// Implicit: Abstracted


//Hiding unnecessary details, re-focusing  the reader and increasing clarity

//Coercion: implicit can be good (sometimes )
var numStudents =16;
console.log(
    `There are ${string(numStudents)} students.`
);

var numStudents =16;
console.log(
    `There are ${numStudents} students.`
);

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if(Number(workshopEnrollment1)< Number(workshopEnrollment2)){
    // ....
}

if(workshopEnrollment1< workshopEnrollment2){
    // ....
}

//Implicit Coercion

//In this case, the coercion is done implicitly. When JavaScript operates in a wrong data type, it will try to convert the value to the right data type.
//Sometimes, the result is different from the one expected. Below are some examples of implicit typecasting:

12 + ""    //Output is "12" as number 12 is converted to string "12"
"15" * 2    //Output is 30 as string 15 is converted to number 15
"15" - "11" //Output is 4 as both the strings are converted to number
undefined + 6 //Output is NaN as undefined could not be converted to number
"Hello" + null  //Output is "Hellonull" as null is converted to string "null"
null + 25     //Output is 25 as null is converted to 0.
true + true //Output is 2 as true is converted to number 1.
false + 10 //Output is 10 as false is converted to number 0.
10 * [6] //Output is 60 as [6] is converted to number 6.
10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number
[1] + [1,2] //Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the two are concatenated to give the result "11,2"


//Explicit Coercion
Number("25") //Output is 25 as "25" string is converted to number 25
Number("") //Output is 0 as "" string is converted to 0
Number([]) //Output is 0 as [] is converted to 0
Number(null) //Output is 0 as null is converted to 0
Number(true) //Output is 1 as true is converted to 1
Number(false) //Output is 0 as false is converted to 0
Number("Test") //Output is NaN as "Test" could not be converted to number

String(25) //Output is "25" as 25 is converted to string "25"
String([]) //Output is "" as [] is converted to empty string ""
String(null) //Output is "null" as null is converted to string "null"
String(true) //Output is "true" as true is converted to string "true"
String(false) //Output is "false" as false is converted to string "false"
String({}) //Output is "[object Object]" as {} is converted to string(similar to calling toString() on a object)

Boolean(25) //Output is true
Boolean([]) //Output is true
Boolean(null) //Output is false
Boolean({}) //Output is true
Boolean("Yeah! I will be converted to Boolean.") //Output is true

//Is showing the reader the extra type details helpful or distraction ?


function isValidName(nane){
    if (typeof name == 'string' &&
        name.trim().length >=3
    ){
        return true;
    }
    return false;
}


function hoursAttented (attended, length){
    if (typeof attended == 'string' &&
    attended.trim() !=''){
        attended = Number(attended);
    }

    if (typeof length == 'string' &&
    length.trim() !=''){
        length = Number(length);
    }
    if (
        typeof attended == 'number' &&
        typeof length == 'number' &&
       attended >= 0 &&
       length >= 0 &&
       Number.isInteger(attended) &&
       Number.isInteger(length) &&
       attended <= length
    ){
        return true;
    }
    return false;

}