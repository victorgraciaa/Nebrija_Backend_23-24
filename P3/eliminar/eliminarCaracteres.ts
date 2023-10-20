import { Caracter } from "../types.ts";

export function eliminarCaracteres(arr: Caracter[], nombre: string): Caracter[] {
    const pos = arr.findIndex((c: Caracter) => c.Name === nombre)
    const nuevoArr: Caracter[] = arr.splice(pos, 1)
    
    return nuevoArr
}