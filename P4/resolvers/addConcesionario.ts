import { Request, Response } from "npm:express@4.18.2";
import ConcesionarioModel from "../db/concesionario.ts";

const addConcesionario = async (req: Request, res: Response) => {
  try {
    const { nombre, coches } = req.body;
    
    if (!nombre) {
      res.status(400).send("El nombre es necesario");
      return;
    }

    const newConcesionario = new ConcesionarioModel({ nombre, coches });
    await newConcesionario.save();

    res.status(200).send({
      nombre: newConcesionario.nombre,
      coches: newConcesionario.coches,
      id: newConcesionario._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addConcesionario;