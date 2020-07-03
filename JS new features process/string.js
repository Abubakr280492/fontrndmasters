//Temolate Strings 
// (Interpolated Literals)

var name = "Abdi";
var email = "getify@gmail.com";
var title = "Teacher";

var msge = "welcome to this class! Your "+
    title + " is "+ name + ", contact: "+
     email + ".";
     console.log(msge)

     //string interpolation: declaritive 

var msg = ` Weclome to home ur ${title} is ${name}, contact: ${email}.`

console.log(msg)



var amount = 12.3;

var msg = formatCurrency
`The total  for ur order ${amount}`;