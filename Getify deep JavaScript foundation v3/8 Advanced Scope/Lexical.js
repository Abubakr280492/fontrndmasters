



//Scoppe : lexical 

var teacher = "Kyle";
function otherClass(){
    var teacher = "Suzy"; 

    function ask(question){
        console.log(teacher,question);
    }

    ask("Why");

}

//dynamic


//function scoping

var teacher = "kyle";



var teacher = "Abdi";
console.log(teacher); //suzy



console.log(teacher); //suzy 

/////////////////////////////////////////////////////////

var teacher = "kyle";

///good way wrap it as folows
//hiding is cool for refactoring 
function abotherTeacher(){
    var teacher = "Abdi";
    console.log(teacher); //suzy
}
abotherTeacher();

console.log(teacher); //kyle 

 
//IIFE pattern

var teacher = "kyle";
(function abotherTeacher(){
    var teacher = "Abdi";
    console.log(teacher); //Abdi
})();
 console.log(teacher); //kyle 

 

 var teacher = "kyle";
 //thisIIFE is anonymous
(function teacher(){
    var teacher = "Abdi";
    console.log(teacher); //suzy
})("Suzy");
 console.log(teacher); //kyle 



 //function scoping: IIFE
//  var teacher;
//  try{
//      teacher = fetchTeacher(1);
//  }
// catch(err){
//     teacher = "KYLE";
// }

// var teacher = ( fuction getTeacher(){
// try{
//     return fetchTeacher(1);
// }
// catch(err){
//     return "KYLE";
// }
// })();

//Block Scoping

//instead of an IIFE?

var teacher = "kyle";
(function abotherTeacher(){
    var teacher = "Abdi";
    console.log(teacher); //Abdi
})();
 console.log(teacher); //kyle 



//  const number boolean string  for api u can use const 



// Scope : Houisting
  
var student;
var teacher;

student; //undefined
teacher;  //undefined
student = 'you';
teacher = 'kyle';


//var hoisting??
//bad
teacher = "kyle";
var teacher;


//function hoisting?
//IMO actually pretty useful 
getTeacher(); //kyle

function getTeacher() {
    return teacher;
}

//let does not hoist ? false
{
teacher = 'kyle'; // TDZ temple dead zone 
let reacher;
}

var teacher = 'kyle';
{
console.log(teacher); //TDZ error!
let teacher = "suzy";
}


//var and let   var : there is gonna be varable teacher when scope starts initialize it to undefined 
// let gonna say create location teacher but dont initialize it (unitialized state)

//tdz exist for const 



function getStudentFromId(studentId) {
    return studentRecords.find(matchId);
    
    function matchId(record){
        return (record.id == studentId);

}


}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);

	records.sort(sortByNameAsc);

	records.forEach(printRecord);
}
function printRecord(record){
    console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function sortByNameAsc(record1,record2){
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(needToEnroll);

	var idsToEnroll = recordsToEnroll.map(getStudentId);

	return [ ...currentEnrollment, ...idsToEnroll ];
}
function getStudentId(record){
    return record.id;
}
function needToEnroll(record){
    return (record.paid && !currentEnrollment.includes(record.id));
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(notYetPaid);

	printRecords(unpaidIds);
}
function notYetPaid(studentId){
    var record = getStudentFromId(studentId);
    return !record.paid;
}
