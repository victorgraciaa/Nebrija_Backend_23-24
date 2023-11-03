import mongoose from "npm:mongoose@7.6.3";
import { Concesionario } from "../types.ts";

const Schema = mongoose.Schema

const concesionarioSchema = new Schema(
    {
        nombre: {type: String, required: true},
        coches: {type: Array<Schema.ObjectId>, ref: "Coche"}
    },
    { timestamps: true }
)

export type ConcesionarioModelType = mongoose.Document & Omit<Concesionario, "id">
export default mongoose.model<ConcesionarioModelType>("concesionarios", concesionarioSchema)