import { Request, Response } from "npm:express@4.18.2";
import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import CocheModel from "../db/coche.ts";
import ConcesionarioModel from "../db/concesionario.ts";

const enviarCocheConcesionario = async (req: Request, res: Response) => {
  try {
    const { matricula, id } = req.params;
    
    if (!matricula) {
      res.status(400).send("Matricula es necesaria");
      return;
    }

    const cocheEnviado = await CocheModel.findOneAndDelete( matricula ).exec()
    if(!cocheEnviado){
      res.status(404).send("Coche no encontrado")
      return
    }

    const concesionario = await ConcesionarioModel.findOne( new ObjectId(id) )
    if(!concesionario){
      res.status(404).send("Concesionario no encontrado")
      return
    }
    concesionario.coches.push(cocheEnviado)
    

  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default enviarCocheConcesionario;