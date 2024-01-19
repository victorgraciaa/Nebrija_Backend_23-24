import mongoose from "mongoose";
import { Contacto } from "../types.ts";

const Schema = mongoose.Schema;

const ContactoSchema = new Schema({
  nombreApellidos: { type: String, required: true },
  nmro: { type: String, required: true, unique: true },
  pais: { type: String, required: false },
  horaPais: { type: String, required: false }
});

export type ContactoModelType = mongoose.Document & Omit<Contacto, "id" >

export const ContactoModel = mongoose.model<ContactoModelType>("Contacto", ContactoSchema);
