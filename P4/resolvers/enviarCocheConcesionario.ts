import { Request, Response } from "npm:express@4.18.2";
import CocheModel from "../db/coche.ts";
import ConcesionarioModel from "../db/concesionario.ts";

const enviarCocheConcesionario = async (req: Request, res: Response) => {
  try {
    const { idConcesionario, idCoche } = req.params;
    
    if (!idCoche || !idConcesionario) {
      res.status(400).send("Id es necesario");
      return;
    }

    const cocheEnviado = await CocheModel.findById( idCoche ).exec()
    if(!cocheEnviado){
      res.status(404).send("Coche no encontrado")
      return
    }

    const concesionario = await ConcesionarioModel.findById( idConcesionario )
    if(!concesionario){
      res.status(404).send("Concesionario no encontrado")
      return
    }

    if(concesionario.coches.length>=10){
      res.status(404).send("No caben mas coches en el concesionario")
    }

    concesionario.coches.push(cocheEnviado)
    await concesionario.save()
    

  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default enviarCocheConcesionario;