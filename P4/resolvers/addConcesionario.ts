import { Request, Response } from "npm:express@4.18.2";
import ConcesionarioModel from "../db/concesionario.ts";

const addConcesionario = async (req: Request, res: Response) => {
  try {
    const { nombre, coches, ventaBloqueada } = req.body;
    
    if (!nombre || ventaBloqueada === undefined || ventaBloqueada === null) {
      res.status(400).send("El nombre y el bloqueo de venta son necesarios");
      return;
    }

    if(coches){
      if( coches.length>10){
        res.status(404).send("El concesionario no puede tener más de 10 coches")
      }
    }    

    const newConcesionario = new ConcesionarioModel({ nombre, coches, ventaBloqueada });
    await newConcesionario.save();

    res.status(200).send({
      nombre: newConcesionario.nombre,
      coches: newConcesionario.coches,
      ventaBloqueada: newConcesionario.ventaBloqueada,
      id: newConcesionario._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addConcesionario;