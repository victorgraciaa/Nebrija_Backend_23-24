// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Booking } from "../types.ts";

import { BookingModel } from "../db/booking.ts";
import { getBookingFromModel } from "../controllers/getBookingFromModel.ts";

export const getBooking = async ( req: Request<{ id: string }>, res: Response<Booking | { error: unknown }> ) => {
  const id = req.params.id;
  try {
    const booking = await BookingModel.findById(id).exec();
    if (!booking) {
      res.status(404).send({ error: "Reserva no encontrada" });
      return;
    }
    const bookingResponse: Booking = await getBookingFromModel(booking);
    res.status(200).json(bookingResponse).send();
  } catch (error) {
    res.status(500).send(error);
  }
};