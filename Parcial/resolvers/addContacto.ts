import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";

const addContacto = async (req: Request, res: Response) => {
  try {
    const { dni, nombreyap, email, cp, iso } = req.body;
    
    if (!dni || !nombreyap || !email || !cp || !iso || cp<0) {
      res.status(500).send("DNI, nombre y apellidos, email, CP e ISO son necesarios. Datos incorrectos");
      return;
    }

    const alreadyExists = await ContactoModel.findOne({ dni }).exec();
    if (alreadyExists) {
      res.status(400).send("Ese contacto ya existe");
      return;
    }

    const newContacto = new ContactoModel({ dni, nombreyap, email, cp, iso });
    await newContacto.save();

    res.status(200).send({
      dni: newContacto.dni,
      nombreyap: newContacto.nombreyap,
      email: newContacto.email,
      cp: newContacto.cp,
      iso: newContacto.iso,
      id: newContacto._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addContacto;
