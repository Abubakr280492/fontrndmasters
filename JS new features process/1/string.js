//Temolate Strings 
// (Interpolated Literals)

// var name = "Abdi";
// var email = "getify@gmail.com";
// var title = "Teacher";

// var msge = "welcome to this class! Your "+
//     title + " is "+ name + ", contact: "+
//      email + ".";
//      console.log(msge)





// //string interpolation: declaritive 
// var msg = ` Weclome to home ur ${title} is ${name}, contact: ${email}.`
// console.log(msg)




// //string interpolation: tagged 
// var amount = 12.3;
// var msg = formatCurrency
// `The total  for ur order ${amount}`;


// function formatCurrency( string, ...values){
//     var str = "";
//     for(let i =0; i<string.length; i++){
//         if(i>0){
//             if(typeof values[i-1] == "number"){
//                 str += `$${values[i-1].toFixed(2)}`;
//             }
//             else {
//                 str += value[i-1];
//             }
//         }
//         str += string[i]
//     }
//     return str;
// }


//applyed tagged template 
//interpolation: advanced
//u may write ur own interpolation

//jsx   also interpolation 
// function logger (string, ...values){
//     var str = '';


//     return str;
// }


// var v =42;
// var o = { a:1, b:[2,3,4] };

// logger `This is my value: ${v} and another: ${o}`'



// function upper(string, ...values){
//     var  ret = "";
//     for (let i=0; i<string.length; i++){
//         if(i>0){
//             ret += String(values[i-1].toUpperCase());
//         }
//         ret += string[i];
//     }

// }
    

// var name = "Abdi",
// twitter = "abdi2804",
// topic = "JS RECENT PARTS!";

// console.log(
//    upper `Hey ${name}(@${twitter}), welcome to ${topic}!` ===
//     "Hey Abdi(@abdi2804), welcome to JS RECENT PARTS!"
// );


//string padding 
//string trimming 

var str = "Hello";

str.padStart(5); //"Hello"

str.padStart(8);  //"   Hello"
str.padStart(8,"*");  //"***Hello"
str.padStart(8,"12345");  //"123Hello"
str.padStart(8,"ab");  //"abaHello"

str.padEnd(8, "*"); //"Hello***"


//left   start trimming      right   end trimming 

var str = "   some stuff \t\t";
str.trim();  // "some stuff"
str.trimStart(); // "some stuff         "
str.trimEnd(); // "       some stuff"



//Array Destructuring 

//decomposing a structure into its indivudual parts
