import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import { ClientModel } from "../db/client.ts";
import { RestaurantModel } from "../db/restaurant.ts";
import { Booking } from "../types.ts";
import { BookingModelType } from "../db/booking.ts";

export const getBookingFromModel = async (booking: BookingModelType): Promise<Booking> => {
  const { _id, date, client, restaurant } = booking;
  
  //const clientFound = await ClientModel.findOne({ _id: new ObjectId(client) });
  const clientFound = await ClientModel.findOne({ _id: new ObjectId(client) }).populate("client");
  if (!clientFound) throw new Error("Cliente de la reserva no encontrado not found");

  //const restaurantFound = await RestaurantModel.findOne({ _id: new ObjectId(restaurant) });
  const restaurantFound = await RestaurantModel.findOne({ _id: new ObjectId(restaurant) }).populate("restaurant");
  if (!restaurantFound) throw new Error("Restaurante de la reserva no encontrado");

  const bookingResponse: Booking = {
    date: date,
    client: clientFound._id.toString(),
    restaurant: restaurantFound._id.toString()
  }

  return bookingResponse;
};