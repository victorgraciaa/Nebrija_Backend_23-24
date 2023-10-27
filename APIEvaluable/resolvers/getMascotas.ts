import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const getMascotas = async (req: Request, res: Response) => {
  try {
    const mascotas = await MascotaModel.find();
    res.status(200).send(mascotas);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMascotas;
