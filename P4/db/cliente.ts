import mongoose from "npm:mongoose@7.6.3";
import { Cliente } from "../types.ts";

const Schema = mongoose.Schema

const clienteSchema = new Schema(
    {
        nombre: {type: String, required: true},
        dinero: {type: Number, required: true},
        coches: {type: Array<Schema.ObjectId>, ref: "Coche"} 
    },                                                                       
    { timestamps: true }
)

export type ClienteModelType = mongoose.Document & Omit<Cliente, "id">
export default mongoose.model<ClienteModelType>("clientes", clienteSchema)