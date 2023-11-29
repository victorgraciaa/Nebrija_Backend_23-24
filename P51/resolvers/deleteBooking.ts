// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { BookingModel } from "../db/booking.ts";
import { ObjectId } from "https://deno.land/x/web_bson@v0.3.0/mod.js";

export const deleteBooking = async (
  req: Request<{ id: string }, {}>,
  res: Response<string | { error: unknown }>
) => {
  const id = req.params.id;
  const booking = await BookingModel.findOneAndDelete({ _id: id }).exec();
  if (!booking) {
    res.status(404).send({ error: "Reserva no encontrada" });
    return;
  }
  res.status(200).send("Reserva eliminada");
};