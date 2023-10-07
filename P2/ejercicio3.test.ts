import { crearLibro } from "./ejercicio3.ts";
import { filtrarLibro } from "./ejercicio3.ts";
import { borrarLibro } from "./ejercicio3.ts";

import { Libro } from "./ejercicio3.ts";

Deno.test("crearLibro", function () {
    const biblioteca: Libro[] = []
    crearLibro()
})

Deno.test("filtrarLibro", function () {
    const biblioteca: Libro[] = []
    const lib1: Libro = {
        id: 1,
        title: "titulo1",
        author: "autor1",
        pages: 80,
        genre: "drama"
    }
    const lib2: Libro = {
        id: 2,
        title: "titulo2",
        author: "autor2",
        pages: 50,
        genre: "comedia"
    }
    biblioteca.push(lib1)
    biblioteca.push(lib2)

    filtrarLibro("drama")
})

Deno.test("borrarLibro", function (){
    const biblioteca: Libro[] = []
    const lib1: Libro = {
        id: 1,
        title: "titulo1",
        author: "autor1",
        pages: 80,
        genre: "drama"
    }
    const lib2: Libro = {
        id: 2,
        title: "titulo2",
        author: "autor2",
        pages: 50,
        genre: "comedia"
    }
    biblioteca.push(lib1)
    biblioteca.push(lib2)

    borrarLibro(1)
})