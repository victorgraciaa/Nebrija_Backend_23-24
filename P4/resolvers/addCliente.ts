import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/cliente.ts";

const addCliente = async (req: Request, res: Response) => {
  try {
    const { nombre, dinero, coches } = req.body;
    
    if (!nombre || !dinero ) {
      res.status(400).send("Nombre y dinero son necesarios");
      return;
    }
    if(dinero<0){
      res.status(400).send("El dinero debe ser una cantidad positiva")
    } 

    const newCliente = new ClienteModel({ nombre, dinero, coches });
    await newCliente.save();

    res.status(200).send({
      nombre: newCliente.nombre,
      dinero: newCliente.dinero,
      coches: newCliente.coches,
      id: newCliente._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addCliente;