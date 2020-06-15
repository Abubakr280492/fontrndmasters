


const oncify = (convertMe) => {
    let counter =0;
    const inner = (input)=>{
        if(counter===0){
            const output = convertMe(input)
            counter++
            return output
        }
        return "sorry"
    }
    return inner
}

const multipBy2 = num => num*2

const oncyfiedMulBy2 = oncify(multipBy2)

 console.log(oncyfiedMulBy2(10))  //invoking   innner has backback 
console.log(oncyfiedMulBy2(7))

