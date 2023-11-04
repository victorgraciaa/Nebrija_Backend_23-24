import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/concesionario.ts";

const getCochesCliente = async (req: Request, res: Response) => {
  try {
    const { idCliente } = req.params

    const concesionario = await ClienteModel.findById( idCliente ).exec();
    if (!concesionario) {
        res.status(404).send("Cliente no encontrado")
        return;
    }
    res.status(200).send(concesionario.coches);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getCochesCliente;