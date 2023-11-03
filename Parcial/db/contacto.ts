import mongoose from "npm:mongoose@7.6.3";
import { Contacto } from "../types.ts";

const Schema = mongoose.Schema;

const contactoSchema = new Schema(
  {
    dni: { type: String, required: true },
    nombreyap: { type: String, required: true },
    email: { type: String, required: true },
    cp: { type: Number, required: true },
    iso: { type: String, required: true }
  },
  { timestamps: true }
);

export type ContactoModelType = mongoose.Document & Omit<Contacto, "id">;

export default mongoose.model<ContactoModelType>("agenda", contactoSchema);
