



// const multipBy2 = x => x*2;
// const add3 = x => x+3;
// const divBy5 = x => x/5;
// const sub4 = x => x-4;

// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i=0; i<array.length; i++){
//         buildingUp = howToCombine(buildingUp, array[i])
//     }
//     return buildingUp
// }

// const runFunctionOnInput = (input,fn )=> {return fn(input)}

// const output = reduce([
//     multipBy2,
//     add3,
//     divBy5,
//     sub4
// ],
// runFunctionOnInput, 11)

// console.log(output);

const multiply = (a,b ) => a*b
function prefillFunction (fn, prefilledValue){
    const inner = (liveInput) => {
        const output = fn(liveInput, prefilledValue)
        return output
    }
    return inner
}

const multiplyBy2 = prefillFunction(multiply,2)
const result = multiplyBy2(5)