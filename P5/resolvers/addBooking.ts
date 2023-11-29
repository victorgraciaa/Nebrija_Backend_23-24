// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Booking } from "../types.ts";

import { BookingModel, BookingModelType } from "../db/booking.ts";
import { getBookingFromModel } from "../controllers/getBookingFromModel.ts";
import { RestaurantModel } from "../db/restaurant.ts";

export const addBooking = async (
  req: Request<{}, {}, BookingModelType>,
  res: Response<Booking | { error: unknown }>
) => {
  try {
    const { date, client, restaurant } = req.body;

    const booking = new BookingModel({
        date,
        client,
        restaurant
    });
    await booking.save();
       
    const bookingResponse: Booking = await getBookingFromModel(booking);

    res.status(201).json(bookingResponse).send();
  } catch (error) {
    res.status(500).send(error);
  }
};