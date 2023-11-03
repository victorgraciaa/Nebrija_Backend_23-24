import { Request, Response } from "npm:express@4.18.2";
import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import ContactoModel from "../db/contacto.ts";

const getContacto = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const contacto = await ContactoModel.findOne({ dni }).exec();
    if (!contacto) {
      res.status(404).send("Contacto no encontrado");
      return;
    }

    const url1 = `https://zip-api.eu/api/v1/info/${contacto.iso}-${contacto.cp}`
    const response1 = await fetch(url1)
    const data1 = await response1.json()

    const url2 = `http://worldtimeapi.org/api/timezone/Europe`

    res.status(200).send({
      dni: contacto.dni,
      nombreyap: contacto.nombreyap,
      email: contacto.email,
      cp: contacto.cp,
      ciudad: data1.place_name,
      pais: data1.state
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getContacto;
