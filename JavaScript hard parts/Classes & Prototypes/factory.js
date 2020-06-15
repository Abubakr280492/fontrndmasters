



const user3 = Object.create(null);  // return empty object no direct propety on it 

user3.name = 'Eva';
user3.score = 9;
user3.increment = function(){
    user3.score++;
}; 