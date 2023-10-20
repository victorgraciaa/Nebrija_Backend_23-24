export interface ResponseData {
    results: nombres[]
}

export type nombres = {
    name: string
}

export const getCaracteres = async (
    page: number
): Promise<string[]> => {

    const url = `https://rickandmortyapi.com/api/character/?page=${page}`

    const response = await fetch(url)
    if(response.status !== 200){
        throw new Error("Cannot fetch location")
    }

    const data:ResponseData = await response.json()

    const resultado: string[] = []

    data.results.forEach(elem => {
        resultado.push(elem.name)
    })

    return resultado

}