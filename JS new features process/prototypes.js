//Prototypes 

function Workshop(teacher){
    this.teacher = teacher;

}

var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Abdi");


deepJs.ask("is ' prototype' a class ");

reactJs.ask("Isn't 'prototype' ugly?");