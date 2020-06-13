



function userCreator (name, score) {    //function defenition + object
    this.name = name;              
    this.score = score;
};

userCreator.prototype.login = function(){console.log("login");};
userCreator.prototype.increment = function() {
    this.score++;
}


const user1 = new userCreator("Abdi",3);    
const user2 = new userCreator("Eva",9); 

user1.increment()



function multiplyBy2(num){
    return num*2
}

multiplyBy2.stored = 5
multiplyBy2(3) //6

multiplyBy2.stored //5
multiplyBy2.prototype //{}
