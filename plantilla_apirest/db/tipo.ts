import mongoose from "mongoose";
import { Tipo } from "../types.ts";

const Schema = mongoose.Schema;

const tipoSchema = new Schema(
  {
    atributo: { type: String, required: true, unique: false },
  },
  { timestamps: true }
);

export type TipoModelType = mongoose.Document & Omit<Tipo, "id">;

export const TipoModel = mongoose.model<TipoModelType>("Tipo", tipoSchema);
//"Tipo" es el nombre de la colección