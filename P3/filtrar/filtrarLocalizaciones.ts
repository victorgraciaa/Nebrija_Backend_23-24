import { Location } from "../types.ts";

export function filtrarLocalizacionesType(arr:Location[], type: string): Location[] {
    const filtrado = arr.filter((l:Location) => l.Type === type)
    return filtrado
}

export function filtrarLocalizacionesDimension(arr:Location[], dimension: string): Location[] {
    const filtrado = arr.filter((l:Location) => l.Dimension === dimension)
    return filtrado
}