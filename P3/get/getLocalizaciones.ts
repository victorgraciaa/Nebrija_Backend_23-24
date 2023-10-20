export interface ResponseData {
    results: localizaciones[]
}

export type localizaciones = {
    name: string
}

export const getLocalizaciones = async (
    page: number
): Promise<string[]> => {

    const url = `https://rickandmortyapi.com/api/location?page=${page}`

    const response = await fetch(url)
    if(response.status !== 200){
        throw new Error("Cannot fetch location")
    }

    const data = await response.json()

    const resultado: string[] = []

    data.results.forEach(elem => {
        resultado.push(elem.name)
    })

    return resultado

}  