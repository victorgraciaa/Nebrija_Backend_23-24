import mongoose from "npm:mongoose@7.6.3";
import { Mascota } from "../types.ts";

const Schema = mongoose.Schema;

const mascotaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true } //CORRECION type: String, enum: MASCOTATYPE, required: true
  },
  { timestamps: true }
);

export type MascotaModelType = mongoose.Document & Omit<Mascota, "id">;

//CORRECION const Model = mongoose.Model
//CORRECION const MascotaModel = new Model<MascotaModelType>("mascotas", MascotaSchema)
//CORRECION export deafault MascotaModel

export default mongoose.model<MascotaModelType>("mascotas", mascotaSchema);
