/*
Para el cumplimiento de las diferentes funciones pedidas en la práctica, utilizamos diferentes
rutas o endpoints, tanto para buscar datos concretos como para manejar nuestra memoria interna (variables donde guardaremos
  las diferentes búsquedas realizadas)
*/

import express, { Request, Response } from "npm:express@4.18.2";
import { getCaracter } from "./get/getCaracter.ts";
import { getCaracteres } from "./get/getCaracteres.ts";
import { getLocalizaciones } from "./get/getLocalizaciones.ts";
import { getLocalizacion } from "./get/getLocalizacion.ts";
import { filtrarCaracteresStatus } from "./filtrar/filtrarCaracteres.ts";
import { filtrarCaracteresGender } from "./filtrar/filtrarCaracteres.ts";
import { filtrarLocalizacionesDimension } from "./filtrar/filtrarLocalizaciones.ts";
import { eliminarCaracteres } from "./eliminar/eliminarCaracteres.ts";
import { eliminarLocalizaciones } from "./eliminar/eliminarLocalizaciones.ts";
import { Caracter } from "./types.ts";
import { Location } from "./types.ts";

const app = express();

const caracterBuscado:Caracter[] = []
const localizacionBuscada:Location[] = []

app

  //RUTA PARA LISTAR LOCALIZACIONES DE MANERA PAGINADA

  .get("/character/page/:p", async (req: Request, res: Response) => {
    try {
      const page: number = req.params.p
      const caracteres = await getCaracteres(page)
      res.status(200).send(caracteres)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  //RUTA PARA LISTAR UN CARACTER CONCRETO
  
  .get("/character/:id", async (req: Request, res: Response) => {
    try {
      const id: number = req.params.id
      const caracter = await getCaracter(id)
      const cr = new Date(caracter.Created)
      res.status(200).send("ID -> "+caracter.ID+
                     "<br>Name -> "+caracter.Name+
                     "<br>Status -> "+caracter.Status+
                     "<br>Species -> "+caracter.Species+
                     "<br>Gender -> "+caracter.Gender+
                     "<br>Origin -> "+caracter.Origin+
                     "<br>Location -> "+caracter.Location+
                     "<br>Created -> "+cr.getDate()+":"+cr.getMonth()+":"+cr.getFullYear())
      caracterBuscado.push(caracter)
      
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  //RUTA PARA LISTAR LOCALIZACIONES DE MANERA PAGINADA

  .get("/location/page/:p", async (req: Request, res: Response) => {
    try {
      const page: number = req.params.p
      const localizaciones = await getLocalizaciones(page)
      res.status(200).send(localizaciones)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  //RUTA PARA LISTAR UNA LOCALIZACION CONCRETA

  .get("/location/:id", async (req: Request, res: Response) => {
    try {
      const id: number = req.params.id
      const localizacion = await getLocalizacion(id)
      const cr = new Date(localizacion.Created)
      res.status(200).send("ID -> "+localizacion.ID+
                     "<br>Name -> "+localizacion.Name+
                     "<br>Type -> "+localizacion.Type+
                     "<br>Dimension -> "+localizacion.Dimension+
                     "<br>Created -> "+cr.getDate()+":"+cr.getMonth()+":"+cr.getFullYear())
      localizacionBuscada.push(localizacion)
            
    } catch (error) {
      res.status(500).send(error.message)
    }
  })
  
  //RUTAS PARA FILTRAR CARACTERES

  .get("/character/status/:status", (req: Request, res: Response) => {
    try {
      const status: string = req.params.status
      const caracteresStatus = filtrarCaracteresStatus(caracterBuscado, status)
      res.status(200).send(caracteresStatus)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  .get("/character/gender/:gender", (req: Request, res: Response) => {
    try {
      const gender: string = req.params.gender
      const caracteresGender = filtrarCaracteresGender(caracterBuscado, gender)
      res.status(200).send(caracteresGender)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  //RUTAS PARA FILTRAR LOCALIZACIONES

  .get("/location/type/:type", (req: Request, res: Response) => {
    try {
      const type: string = req.params.type
      const localizacionesType = filtrarLocalizacionesDimension(localizacionBuscada, type)
      res.status(200).send(localizacionesType)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  .get("/location/dimension/:dimension", (req: Request, res: Response) => {
    try {
      const dimension: string = req.params.dimension
      const localizacionesDimension = filtrarLocalizacionesDimension(localizacionBuscada, dimension)
      res.status(200).send(localizacionesDimension)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })



  //RUTAS PARA ELIMINAR

  .get("/eliminar/character/:name", async (req: Request, res: Response) => {
    try {
      const name: string = req.params.name
      eliminarCaracteres(caracterBuscado, name)
      res.status(200).send("Se ha eliminado a "+name+" de la memoria interna de caracteres")
      
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  .get("/eliminar/location/:name", async (req: Request, res: Response) => {
    try {
      const name: string = req.params.name
      eliminarLocalizaciones(localizacionBuscada, name)
      res.status(200).send("Se ha eliminado "+name+" de la memoria interna de localizaciones")
      
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

app.listen(3000, () => {
  console.log("Server started on port 3000");
});