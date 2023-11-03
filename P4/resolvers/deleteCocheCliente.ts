import { Request, Response } from "npm:express@4.18.2";
import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import ClienteModel from "../db/cliente.ts";
import CocheModel from "../db/cliente.ts"

const deleteCocheCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { matricula } = req.params
    /*
    const cocheCliente = await ClienteModel.findOneAndDelete({ matricula }).exec();
    */

    const cliente = ClienteModel.findById({ _id: new ObjectId(id) }).exec()
    if (!cliente) {
      res.status(404).send("Cliente no encontrado");
      return;
    }
    const cocheCliente = CocheModel.find( matricula ).exec()
    if (!cocheCliente) {
      res.status(404).send("Coche del cliente no encontrado");
      return;
    }
    //cliente.coches.splice.()
    res.status(200).send("Coche eliminado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCocheCliente;
