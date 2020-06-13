



const user2 = {};

user2.name = 'Abdi';
user2.score = 6;
user2.increment = function(){
    user2.score++;
};



const user3 = Object.create(null);  // return empty object no direct propety on it 

user3.name = 'Eva';
user3.score = 9;
user3.increment = function(){
    user3.score++;
}; 

//DRY dont repeat yourself man
// we generiliza save it once use it again again

//Solution 1

function userCreator (name, score) {  // 1 user creator function
    const newUser = {};                //create a const which is new object 
    newUser.name = name;              
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreator("Abdi",3);  //2 call userCreator Brand new execution contant in local memory parametry name argument is abdi then next parametr score argument 3
const user2 = userCreator("Eva",9);

user.increment()
