



//solution 2 using the prototype chain 

function userCreator (name, score) {    //declaring function in global memory 
    const newUser = Object.create(userFunctionStore);   //we assign andi to parametr "name"
    newUser.name = name;              
    newUser.score = score;//  next parametr score to 3
    return newUser;//empty object  it has imtement link hidden property it has up to 
};
//indalible link
const userFunctionStore = {   //store in object increment and login 
    increment: function(){
        this.score++;
    },
    login: function(){
        console.log("Logged in");
    }
};


const user1 = userCreator("Abdi",3);    //declare const user1   brand new wxecution context
const user2 = userCreator("Eva",9);

user1.increment() // impliset paramert "this" we get assight to "user 1"

console.log("hello");