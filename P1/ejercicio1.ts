export const quickSort = (arr:number[]): number[] => {
    const pivote:number=arr[0];
    
    if(arr.length<=1){
        return arr;
    }

    const izq: number[] = [];
    const der: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivote) {
            izq.push(arr[i]);
        } else {
            der.push(arr[i]);
        }
    }

    return [...quickSort(izq), pivote, ...quickSort(der)];

}

const arrayEjemplo:number[]=[6,8,2,18,3,1];
console.log(quickSort(arrayEjemplo));