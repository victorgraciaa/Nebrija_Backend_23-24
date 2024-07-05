export type CharacterType = {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: string,
    image: string,
    episode: string[],
    url: string,
    created: string
}

export type LocationType = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}

export type EpisodeType = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}