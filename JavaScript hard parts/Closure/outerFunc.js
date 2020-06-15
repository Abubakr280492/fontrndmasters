


const outer = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter ++;
    }
  return  incrementCounter();
}

const newFunc= outer();

newFunc();//1 it has backpack p l s r d  persistent lexical scope REFERENCED DATA  
newFunc();//2  //another name c.o.v.e  close over variable environment or closure  
