import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import { Client } from "../types.ts";
import { ClientModelType } from "../db/client.ts";
import { BookingModel } from "../db/booking.ts";

export const getClientFromModel = async (client: ClientModelType): Promise<Client> => {
  const { _id, firstName, lastName, email, phoneNumber, dni } = client;

  //const bookingsFound = await BookingModel.find({ client: { $in: new ObjectId(_id) } });
  const bookingsFound = await BookingModel.find({ client: { $in: new ObjectId(_id) } }).populate("client");
  if (!bookingsFound) throw new Error("Reservas del cliente no encontradas");
  
  const clientResponse: Client = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    dni: dni,
    bookings: bookingsFound
  }

  return clientResponse;
};