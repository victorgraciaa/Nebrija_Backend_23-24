import { Location } from "../types.ts";

export function eliminarLocalizaciones(arr: Location[], nombre: string): Location[] {
    const pos = arr.findIndex((l: Location) => l.Name === nombre)
    const nuevoArr: Location[] = arr.splice(pos, 1)
    
    return nuevoArr
}