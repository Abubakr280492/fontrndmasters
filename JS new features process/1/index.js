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