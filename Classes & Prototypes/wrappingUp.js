



function userCreator (name, score) {  
    const newUser = Object.create(userFunctionStore);  
    newUser.name = name;              
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {   
    increment: function(){
        const add1 = () => { this.score++;}
        add1()
    }
};


const user1 = userCreator("Abdi",3);    
const user2 = userCreator("Eva",9); 

user1.increment();

