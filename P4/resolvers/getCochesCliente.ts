import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/cliente.ts";

const getCochesCliente = async (req: Request, res: Response) => {
  try {
    const { idCliente } = req.params
    console.log(idCliente)

    const cliente = await ClienteModel.findById( idCliente ).exec();
    if (!cliente) {
        res.status(404).send("Cliente no encontrado")
        return;
    }
    res.status(200).send(cliente.coches);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getCochesCliente;