export const arr_alfabeto = (arr_palabras:string[]):string => {

    const arr_ordenado:string[]=arr_palabras.sort();
    let valor_solucion:string="";

    for(let i=0; i<arr_ordenado[0].length; i++){
        if(i===arr_ordenado[0].length-1){
            valor_solucion=valor_solucion+arr_ordenado[0][i];
        }
        else{
            valor_solucion=valor_solucion+arr_ordenado[0][i]+" ";
        }
    }
    
    return valor_solucion;
}

const arr_ejemplo:string[]=["avion", "zapato", "mano", "baul"];
const solucion:string = arr_alfabeto(arr_ejemplo);
console.log(solucion)