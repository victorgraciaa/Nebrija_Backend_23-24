import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/cliente.ts";

const traspasarCoche = async (req: Request, res: Response) => {
  try {
    const { idClienteVendedor, idClienteComprador, matricula } = req.params;
    
    if (!idClienteVendedor || !idClienteComprador || !matricula) {
      res.status(400).send("Id y matricula son necesarios");
      return;
    }

    const clienteVendedor = await ClienteModel.findById( idClienteVendedor ).exec()
    if(!clienteVendedor){
        res.status(404).send("Cliente vendedor no encontrado")
        return
    }

    const clienteComprador = await ClienteModel.findById( idClienteComprador ).exec()
    if(!clienteComprador){
        res.status(404).send("Cliente comprador no encontrado")
        return
    }

    const cocheTraspasado = clienteVendedor.coches.find( (coche) => coche.matricula === matricula )
    if(!cocheTraspasado){
      res.status(404).send("Coche no encontrado")
      return
    }

    clienteComprador.coches.push(cocheTraspasado)
    clienteVendedor.coches = clienteVendedor.coches.filter( (coche) => coche.matricula !== matricula );

    await clienteVendedor.save()
    await clienteComprador.save()

  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default traspasarCoche;