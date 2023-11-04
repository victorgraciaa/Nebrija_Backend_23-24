import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/cliente.ts";
import CocheModel from "../db/cliente.ts"

const deleteCocheCliente = async (req: Request, res: Response) => {
  try {
    const { idCliente, idCoche } = req.params

    const cliente = await ClienteModel.findById( idCliente ).exec()
    if (!cliente) {
      res.status(404).send("Cliente no encontrado");
      return;
    }
    
    
    const coche = await CocheModel.findById( idCoche ).exec()
    if (!coche) {
      res.status(404).send("Coche del cliente no encontrado");
      return;
    }

    const cocheBorrado = cliente.coches.includes(coche._id.toString());
    if (!cocheBorrado) {
      res.status(404).send("Coche not found");
      return;
    }

    cliente.coches.splice(cliente.coches.indexOf(coche._id.toString()), 1);
    await cliente.save();
    
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCocheCliente;
