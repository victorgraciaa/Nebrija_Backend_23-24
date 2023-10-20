export type Caracter = {
    ID: number,
    Name: string,
    Status: string,
    Species: string,
    Gender: string,
    Origin: Origin,
    Location: string,
    Created: string
}

type Origin = {
    name: string
}

export type Location = {
    ID: number,
    Name: string,
    Type: string,
    Dimension: string,
    Created: string
}