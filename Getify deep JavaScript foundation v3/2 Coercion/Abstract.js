// AbstractOperation 

// ToPrimitive(hint)


// hint: 'number '    hint: 'string'
// valueOf()           toString()
// toString()          valueOf()



//ToString

// null "null"
// underfined 'underfined'
// true 'true'
// false 'false'
// 3.14 '3.14'
// 0 '0'
// -0 '0' //OOOPS



// toString(object):
// toPrimitive(string)
// aka: toString()/ valueOf()

// //Abstract operatios: Tostring(Array)
// [] ''
// [] '1,2,3'
// [null,underfined] ','
// [[[],[],[],][]] ',,,'
// [,,,,] ',,,'

// Abstract operatios: Tostring(Object)

// {} '[object Object]'
// {a:2} '[object Object]'
// {toString(){return"X"}}  'X'

//ToNumber
// Abstract operatios: ToNumber

// '' 0   //OOPS
// '0' 0
// '-0' -0
// ' 009 ' 9
// '3.14' 3.14
// '0.' 0
// '.0' 0
// '.' NaN
// '0xaf' 175

// false 0
// true 1 
// null 0 
// undefined NaN



// toNumber(object):
// toPrimitive(number)
// aka: valueOf()/ toString()



// Abstract operatios: ToNumber (Array/Object)

// (for[] and {} by default):
// valueOf(){return this;}
//  )

//Coercion: ToNumber(Array)

// [''] 0 //OOPS
// ['0'] 0
// ['-0'] -0
// [null] 0 //OOPS
// [underfined] 0 //OOPS 
// [1,2,3] NaN
// [[[[]]]] 0 //OOPS

//Coercion: toNumber(Object)

// {..}  NaN
// {valueOF(){return 3}} 3


//ToBoolean 


// falsy       Truthy
// ""           'foo'
// 0,-0           23
// null        
// NaN
// false
// undefined

// if on the list of falsy not exist it is always true




//cases of coercion
// you claim to avoid coercion cuz it's evil, but...

//coercion: we all do it...
var numStudents = 16;

console.log(
    `There are ${numStudents} students. `
);
//There are 16 students.

//Coercion: string concatenation(number to string)
var msg1 = "there are";
var numStudents = 16;
var msg2 = "students.";
console.log(
    msg1 + numStudents + msg2
);
//There are 16 students.


//Coercion: number to String  //super explicit
var numStudents = 16;
console.log(
    `There are ${[numStudents].join("")} students. `
);

var numStudents = 16;
console.log(
    `There are ${numStudents.toString()} students. `
);

var numStudents = 16;
console.log(
    `There are ${String(numStudents)} students. `
);

//OK OK but, what about ...?
function   addAStudent(numStudents){
    return numStudents +1;
}

addAStudent(studentsInputElem.value);
// "161" OOPS

function   addAStudent(numStudents){
    return numStudents +1;
}
addAStudent(+studentsInputElem.value); //  +  invokes two number operation 
 //17

 function   addAStudent(numStudents){
    return numStudents +1;
}
addAStudent( 
    Number(studentsInputElem.value)
);  //17  //semantivc way to tell 


function   addAStudent(numStudents){
    return numStudents -1 ;//- only defines for numbers
}
kickStudentOut( 
 studentsInputElem.value
); //15 


//Yeah, but

//Coercion: ___to boolean
//implicit
if (studentsInputElem.value) {
    numStudents = Number(studentsInputElem.value);
}
while (newStudent.length){
    enrollStudent(newStudent.pop());
}

//explicit
if(!!studentsInputElem.value){
    newStudent = Number(studentsInputElem.value);
}
while (newStudent.length>0){
    enrollStudent(newStudent.pop());
}//more sementic 

if(studentsNameElem.value){
    student.name = studentsNameElem.value;
}

//***************** */

Boolean(''); //false 
Boolean('  \t\n')  //true OOPS


var workshop = getRegistration(student);
if(workshop) {
    console.log(
        `Welcome ${student.name} to ${workshop.name}.`
    );
}

//****************************** */
Boolean(undefined); //false
Boolean(null); //false
Boolean({}); //ture

//Boxing
//Coercion: primitive to object
if(studentNameElem.value.length>50){
    console.log("Student's name too long.");
}


//Every languages has type conversion corner cases
//Coercion: corner cases

Number('');  //0 OOPS
Number( ' \t\n');  //0 OOPS
Number(null); //0 OOPS
Number(underfined); //NaN
Number([]); //0 OOPS
Number([1,2,3]); //NaN  
Number([null]); //0 OOPS
Number([underfined]); //0 OOPS
Number({}); //NaN

String(-0); //'0' OOPS
String(null); //'null'
String(underfined); //'underfined'
String([null]);  //''  oops
String([undefined])  //'' oops

Boolean (new Boolean(false)); //true OOPS


//The root of All (Courcion) Evil 
studentInput.value = ''; //..
Number(studentsInput.value); //0

studentInput.value = '  \t\n'; //..
Number(studentsInput.value); //0


Number(true); //1
Number(false); //0

1<2; //true
2<3; //true
1<2<3; //true (but...)

(1<2) <3;
(true) < 3;  //1<3 
1<3; // true (hmmm)

3>2; //true
2>1; //true
3>2>1; //false     3>2 true which is 1   1>1 false

(3>2) >1;
(true) >1;
1>1; // false 



 
 