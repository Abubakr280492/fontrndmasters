



// they forget privioust run value 
const mutiplyBy2 = x => x*2


const output = mutiplyBy2(7); //14
const newOutput = mutiplyBy2(3); //6


const functionCreator = () => {
    let counter = 0 //we save counter in  local memory 
    const add3 = (num) => {   // declaaare func 3 and return it    num : 2
        const result = num+3  // 5
        return result // 5 to result
    }
    return add3
}

const generatedFunc = functionCreator()  //new execution context  were saved in generatedFunc

const result = generatedFunc(2) //5   result = generateFunc's name is add3




const add3 = x => x+3
const div5 = x => x/5

