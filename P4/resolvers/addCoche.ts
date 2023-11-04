import { Request, Response } from "npm:express@4.18.2";
import CocheModel from "../db/coche.ts";

const addCoche = async (req: Request, res: Response) => {
  try {
    const { matricula, precio } = req.body;
    
    if (!matricula || !precio) {
      res.status(400).send("Matricula y precio son necesarios");
      return;
    }
    if(matricula.length !== 7){
      res.status(400).send("La matricula del coche debe contener 7 caracteres")
      return
    }

    const coche = await CocheModel.findOne({ matricula: matricula }).exec();
    if (coche) {
      res.status(400).send("El coche ya existe");
      return;
    }

    if(precio<0){
      res.status(400).send("El dinero debe ser una cantidad positiva")
      return
    }

    const alreadyExists = await CocheModel.findOne({ matricula }).exec();
    if (alreadyExists) {
      res.status(400).send("El coche ya existe");
      return;
    }

    const newCoche = new CocheModel({ matricula, precio });
    await newCoche.save();

    res.status(200).send({
      matricula: newCoche.matricula,
      precio: newCoche.precio,
      id: newCoche._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addCoche;