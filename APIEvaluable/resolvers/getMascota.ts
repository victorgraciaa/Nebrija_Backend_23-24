import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const getMascota = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const mascota = await MascotaModel.findOne({ _id }).exec();
    if (!mascota) {
      res.status(404).send("Mascota no encontrada");
      return;
    }
    res.status(200).send({
      nombre: mascota.nombre,
      descripcion: mascota.descripcion,
      tipo: mascota.tipo,
      id: mascota._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMascota;
