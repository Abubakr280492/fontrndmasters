







function userCreator (name, score) {  
    const newUser = Object.create(userFunctionStore);  
    newUser.name = name;              
    newUser.score = score;
    return newUser;
};
//indalible link
const userFunctionStore = {   
    increment: function(){
        this.score++;
    },
    login: function(){
        console.log("Logged in");
    }
};


const user1 = userCreator("Abdi",3);    
const user2 = userCreator("Eva",9);

user1.hasOwnProperty('score')
