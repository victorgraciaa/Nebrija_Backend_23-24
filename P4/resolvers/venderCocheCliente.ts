import { Request, Response } from "npm:express@4.18.2";
import CocheModel from "../db/coche.ts";
import ConcesionarioModel from "../db/concesionario.ts";
import ClienteModel from "../db/cliente.ts"

const venderCocheCliente = async (req: Request, res: Response) => {
  try {
    const { idConcesionario, idCliente, idCoche } = req.params;    
    if (!idCoche || !idConcesionario || !idCliente) {
      res.status(400).send("Id es necesario");
      return;
    }

    const cocheVendido = await CocheModel.findById( idCoche ).exec()
    if(!cocheVendido){
      res.status(404).send("Coche no encontrado")
      return
    }

    const concesionario = await ConcesionarioModel.findById( idConcesionario ).exec()
    if(!concesionario){
      res.status(404).send("Concesionario no encontrado")
      return
    }

    const cliente = await ClienteModel.findById(idCliente).exec();
    if (!cliente) {
        res.status(404).send("Cliente no encontrado");
        return;
    }

    if (cliente.dinero < cocheVendido.precio) {
        res.status(400).send("El cliente no tiene dinero suficiente");
        return;
    }

    if(concesionario.ventaBloqueada === true){
        res.status(400).send("El concesionario tiene bloqueada la venta")
        return;
    }
    
    cliente.dinero -= cocheVendido.precio;

    cliente.coches.push(cocheVendido);
    await cliente.save();

    concesionario.coches.splice( concesionario.coches.indexOf(cocheVendido._id.toString()), 1 );
    await concesionario.save();
  
    await CocheModel.deleteOne({ idCoche }).exec();
  
    res.status(200).send("Coche vendido");
    

  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default venderCocheCliente;