


const outer = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter ++;
    }
    incrementCounter();
}

outer();