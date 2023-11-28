import mongoose from "mongoose";
import { Client } from "../types.ts";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, unique: true },
    dni: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "bookings" }]
  },
  { timestamps: true }
);

// Validación de dni único
clientSchema
  .path("dni")
  .validate(async function (dni: string) {
    const dniExistente = await mongoose.models.Client.findOne({ dni });
    return !dniExistente;
  }, "El dni ya existe");

// Validación del formato email
clientSchema
  .path("email")
  .validate(function (email: string) {
    const emailExpRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailExpRegular.test(email.toLowerCase());       // Utilizo .test para retornar TRUE o FALSE en función 
                                                       // de si cumple la expresión regular
  }, "El email no es valido");

// Validación del formato dni
clientSchema
  .path("dni")
  .validate(function (dni: string) {
    const dniExpRegular = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    return dniExpRegular.test(dni);
  }, "El dni no es valido");

// Validación del formato phoneNumber
clientSchema
  .path("phoneNumber")
  .validate(function (phoneNumber: number) {
    const phoneNumberExpRegular = /^[0-9]{9}$/;
    return phoneNumberExpRegular.test(phoneNumber.toString());
  }, "El numero de telefono no es valido");

// Al buscar un cliente, mostrar el nombre del restaurante y del cliente de las reservas
clientSchema
  .pre("findOne", async function (next) {
    const client = this as ClientModelType;
    try {
      await mongoose.model("bookings").updateOne(
        { _id: client.bookings },
        { $set: { bookings: client._id } }
      );
    } catch (e) {
      console.error(e)
    }
  });

export type ClientModelType = mongoose.Document &
  Omit<Client, "bookings">;
  
export const ClientModel = mongoose.model<ClientModelType>( "Client", clientSchema );