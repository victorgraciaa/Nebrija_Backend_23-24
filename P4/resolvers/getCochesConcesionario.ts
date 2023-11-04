import { Request, Response } from "npm:express@4.18.2";
import ConcesionarioModel from "../db/concesionario.ts";

const getCochesConcesionario = async (req: Request, res: Response) => {
  try {
    const { idConcesionario } = req.params
    
    const concesionario = await ConcesionarioModel.findById( idConcesionario ).exec();

    if (!concesionario) {
        res.status(404).send("Concesionario no encontrado")
        return;
    }

    res.status(200).send(concesionario.coches);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getCochesConcesionario;