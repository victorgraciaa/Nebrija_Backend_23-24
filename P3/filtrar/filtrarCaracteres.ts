import { Caracter } from "../types.ts";

export function filtrarCaracteresStatus(arr:Caracter[], status: string): Caracter[] {
    const filtrado = arr.filter((c:Caracter) => c.Status === status)
    return filtrado
}

export function filtrarCaracteresGender(arr:Caracter[], gender: string): Caracter[] {
    const filtrado = arr.filter((c:Caracter) => c.Gender === gender)
    return filtrado
}