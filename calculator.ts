export function sum(operation:string,...numbers:number[]):number|string{    
    if(operation === "+"){
        return numbers.reduce((acc,current)=>acc+current,0); 
    }else if(operation === "-"){
        return numbers.reduce((acc,current)=>acc-current,0);
    }else if(operation === "*"){
        return numbers.reduce((acc,current)=>acc*current,0);
    }else if(operation === "/"){
        return numbers.reduce((acc,current)=>acc/current,1);
    }else{
        return "Invalid operation: " + operation;
    }
}