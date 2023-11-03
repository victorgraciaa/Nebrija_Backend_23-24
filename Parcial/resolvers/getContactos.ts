import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";

const getContactos = async (req: Request, res: Response) => {
  try {
    const contactos = await ContactoModel.find({}, {_id: 0, dni: 1, nombreyap: 1});

    res.status(200).send(contactos)
    
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getContactos;
