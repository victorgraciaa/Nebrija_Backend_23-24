import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";

const updateContacto = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const { nombreyap, email, cp, iso } = req.body;

    if (!dni || !nombreyap || !email || !cp || !iso || cp<0) {
      res.status(500).send("DNI, nombre y apellidos, email, CP e ISO son necesarios. Datos incorrectos");
      return;
    }

    const updatedContacto= await ContactoModel.findOneAndUpdate(
      { dni },
      { nombreyap, email, cp, iso },
      { new: true }
    ).exec();

    if (!updatedContacto) {
      res.status(404).send("Contacto no encontrado");
      return;
    }

    res.status(200).send({
      dni: updatedContacto.dni,
      nombreyap: updatedContacto.nombreyap,
      email: updatedContacto.email,
      cp: updatedContacto.cp,
      iso: updatedContacto.iso,
      id: updatedContacto._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateContacto;
