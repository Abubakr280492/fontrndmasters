



// TODO: write the validation functions



// tests:
function isValidName (name){
    if (typeof name === 'string' && 
    name.trim().length >=3 ){  //Метод trim() удаляет пробельные символы с начала и конца строки.
        return true;
    }
    return false;

}

//console.log(isValidName("Frank") === true);

function hoursAttended (fr, to){
    if( typeof fr === 'string' && fr.trim() != ''){
        fr = Number(fr);
    }
    if ( typeof to ==='string' && to.trim() !=''){
        to = Number(to);
    }
    if ( typeof fr === 'number' &&
         typeof to === 'number' &&
         fr <= to &&
         fr >= 0  &&
         to >= 0  &&
         Number.isInteger(fr) &&
         Number.isInteger(to)
    ){
        return true;
    }
    return false;
}
//teacher explanation 

// if (!Object.is || true){
//     Object.is = function Object(x,y){
//         var xNegativeZero = isItNegZero(x);
//         var yNegativeZero = isItNegZero(y);

//         if(xNegativeZero || yNegativeZero){
//             return xNegativeZero && yNegativeZero;
//         }
//         else if (isItNaN(x) && isItNaN(y)){
//             return true;
//         }
//         else {
//             return x===y;
//         }
//         function    isItNegZero(v) {
//             return v == 0 && (1/v) == -Infinity;
//         }
//         function isItNaN(v){
//             return v !==v;
//         }
//     };
// }

console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
 console.log(hoursAttended("6",10) === true);
 console.log(hoursAttended("6","10") === true);

 console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
 console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
