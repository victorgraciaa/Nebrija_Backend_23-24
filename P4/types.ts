export type Coche = {
    matricula: string,
    precio: number
}

export type Cliente = {
    nombre: string,
    dinero: number,
    coches: Coche[]
}

export type Concesionario = {
    nombre: string,
    coches: Coche[],
    ventaBloqueada: boolean
}