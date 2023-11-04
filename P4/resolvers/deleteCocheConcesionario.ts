import { Request, Response } from "npm:express@4.18.2";
import ConcesionarioModel from "../db/concesionario.ts";
import CocheModel from "../db/cliente.ts"

const deleteCocheConcesionario = async (req: Request, res: Response) => {
  try {
    const { idConcesionario, idCoche } = req.params

    const concesionario = await ConcesionarioModel.findById( idConcesionario ).exec()
    if (!concesionario) {
      res.status(404).send("Concesionario no encontrado");
      return;
    }
    
    const coche = await CocheModel.findById( idCoche ).exec()
    if (!coche) {
      res.status(404).send("Coche del concesionario no encontrado");
      return;
    }

    const cocheBorrado = concesionario.coches.includes(coche._id.toString());
    if (!cocheBorrado) {
      res.status(404).send("Coche not found");
      return;
    }

    concesionario.coches.splice(concesionario.coches.indexOf(coche._id.toString()), 1);
    await concesionario.save();
    
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCocheConcesionario;
