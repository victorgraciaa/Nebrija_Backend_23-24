import mongoose from "npm:mongoose@7.6.3";
import { Coche } from "../types.ts";

const Schema = mongoose.Schema

const cocheSchema = new Schema(
    {
        matricula: {type: String, required: true},
        precio: {type: Number, required: true}
    },
    { timestamps: true }
)

export type CocheModelType = mongoose.Document & Omit<Coche, "id">
export default mongoose.model<CocheModelType>("coches", cocheSchema)