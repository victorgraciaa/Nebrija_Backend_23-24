export type Libro = {
    id: number
    title: string
    author: string
    pages: number
    genre: string
}

const biblioteca:Libro[] = []

export function crearLibro(): void {

    try {        
            const _id = parseInt(prompt("Introduce el ID numerico del libro que quieras crear: "))
            if(biblioteca.some((l: Libro) => l.id===_id)){
                console.log("El ID del libro ya existe")
            }
            else{
                const _title = prompt("Introduce el titulo del libro: ")
                const _author = prompt("Introduce el autor del libro: ")
                const _pages = parseInt(prompt("Introduce el numero de paginas del libro: "))
                const _genre = prompt("Introduce el genero del libro: ")
    
                const libro = {
                    id : _id,
                    title : _title,
                    author : _author,
                    pages : _pages,
                    genre : _genre
                }
                biblioteca.push(libro)
            }
            

    } catch (e) {
        console.log(e)
    }
    
}

export function filtrarLibro(genre: string): void {
    const filtrado = biblioteca.filter((l: Libro) => l.genre === genre)
    console.log("Los libros del genero "+genre+" son: ")
    filtrado.forEach((l: Libro) => console.log("\nTitulo: "+l.title+
                                                ", Autor: "+l.author+
                                                ", Paginas: "+l.pages+
                                                ", Genero: "+l.genre+
                                                ", ID: "+l.id))
}

export function borrarLibro(id: number): void {
    const pos = biblioteca.findIndex((l: Libro) => l.id === id)
    biblioteca.splice(pos, 1)
}

let activo = true

while(activo){

    console.log("\n=========================================\n\nBIBLIOTECA \n\n"
            +"1 - Crear libro \n"
            +"2 - Filtrar libro por género \n"
            +"3 - Borrar libro \n"
            +"4 - Salir \n"
            +"\n=========================================\n")

    const opcion = prompt("Selecciona la opcion que desee: ")

    switch(opcion){

        case "1":
            crearLibro()
            break
    
        case "2":            
            filtrarLibro(prompt("Introduce el genero por el que quieras filtrar los libros: "))
            break
    
        case "3":
            borrarLibro(parseInt(prompt("Introduce el ID del libro que quieras eliminar: ")))
            break
    
        case "4":
            activo = false        
            break
    
        default:
            console.log("Opcion no valida")
            break
    
    }

}

    


