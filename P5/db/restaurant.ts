import mongoose from "mongoose";
import { Restaurant } from "../types.ts";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    cif: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "bookings" }],
  },
  { timestamps: true }
);

// Validaciones del cif
/*
restaurantSchema
  .path("cif")
  .validate(function (cif: string) {
    const cifExpRegular = /^[ABCDEFGHPQSKLMX][0-9]{8}$/i;
    return cifExpRegular.test(cif);
  }, "El cif es erroneo");

restaurantSchema
.path("cif")
.validate(async function (dni: string) {
  const cifExistente = await mongoose.models.Client.findOne({ dni });
  return !cifExistente;
}, "El cif ya existe");
*/

// Si se elimina un restaurante, se eliminan sus reservas asociadas
/*
restaurantSchema.
  pre("findOneAndDelete", async function (next) {
    const restaurant = this as RestaurantModelType;
    try {
      await mongoose.model("bookings").deleteMany(
        { _id: { $in: restaurant.bookings } }
      );
    } catch (e) {
      console.error(e)
    }
  });
*/

export type RestaurantModelType = mongoose.Document &
  Omit<Restaurant, "bookings">;
  
export const RestaurantModel = mongoose.model<RestaurantModelType>( "Restaurant", restaurantSchema );