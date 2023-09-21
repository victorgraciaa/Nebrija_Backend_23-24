export const multiplos_3_5 = (n:number):number[] => {

    const solucion:number[]=[];

    for(let i:number=0; i<n; i++){
        
        if(3*i<n){
            solucion.push(3*i); 
        }
        if(i*3 % 5 ===0){
            continue;
        }
        if(5*i<n){
            solucion.push(5*i);  
        }               
    }

    return solucion;
}

console.log(multiplos_3_5(10));