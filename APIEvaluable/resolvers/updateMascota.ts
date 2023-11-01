import { Request, Response } from "npm:express@4.18.2";
import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import MascotaModel from "../db/mascota.ts";

const updateMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, tipo } = req.body;
    const mascota = await MascotaModel.findOneAndDelete({ _id: new ObjectId(id) }).exec();
    if (!mascota) {
      res.status(404).send("Mascota no encontrada");
      return;
    }
    if (!nombre || !descripcion || !tipo) {
      res.status(400).send("Nombre, descripcion y tipo son necesarios");
      return;
    }
    
    /*
    if(tipo !== "perros" || tipo !== "gatos" || tipo !== "serpientes"){
      res.status(400).send("El tipo debe ser: perros, gatos o serpientes")
    }
    */  

    const updatedMascota = await MascotaModel.findOneAndUpdate(
      { _id },
      { nombre, descripcion, tipo },
      { new: true }
    ).exec();

    if (!updatedMascota) {
      res.status(404).send("Mascota no encontrada");
      return;
    }

    res.status(200).send({
      nombre: updatedMascota.nombre,
      descripcion: updatedMascota.descripcion,
      tipo: updatedMascota.tipo,
      id: updatedMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateMascota;
