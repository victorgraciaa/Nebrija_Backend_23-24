import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";
import { Restaurant } from "../types.ts";
import { RestaurantModelType } from "../db/restaurant.ts";
import { BookingModel } from "../db/booking.ts";

export const getRestaurantFromModel = async (restaurant: RestaurantModelType): Promise<Restaurant> => {
  const { _id, name, cif, address } = restaurant;

  //const bookingsFound = await BookingModel.find({ restaurant: { $in: new ObjectId(_id) } });
  const bookingsFound = await BookingModel.find({ restaurant: { $in: new ObjectId(_id) } }).populate("restaurant");
  if (!bookingsFound) throw new Error("Reservas del restaurante no encontradas");

  const restaurantResponse: Restaurant = {
    name: name,
    cif: cif,
    address: address,
    bookings: bookingsFound
  }

  return restaurantResponse;
};