import mongoose from "mongoose";
import { Booking } from "../types.ts";
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    date: { type: Date },
    client: { type: String, required: true },
    restaurant: { type: String, required: true },
  },
  { timestamps: true }
);

// Al añadir una reserva, se añade esa reserva correspondiente en restaurantes y clientes
/*
bookingSchema.
  pre("save", async function (next) {
    const newBooking = this as BookingModelType;
    try {
      await mongoose.model("restaurants").updateOne(
        { _id: newBooking.restaurant },
        { $push: { bookings: newBooking } }
      );

      await mongoose.model("clients").updateOne(
        { _id: newBooking.client },
        { $push: { bookings: newBooking } }
      );
    } catch (e) {
      console.error(e)
    }
    next();
  });
  */

  // Si se elimina una reserva, se eliminan esa reserva correspondiente en restaurantes y clientes
  /*
  bookingSchema.
  pre("findOneAndDelete", async function (next) {
    const booking = this as BookingModelType;
    try {
      await mongoose.model("restaurants").updateOne(
        { _id: booking.restaurant },
        { $pull: { bookings: booking._id } }
      );

      await mongoose.model("clients").updateOne(
        { _id: booking.client },
        { $pull: { bookings: booking._id } }
      );
    } catch (e) {
      console.error(e)
    }
  });
  */

  // Al buscar una reserva, mostrar el nombre del restaurante y del cliente
  /*
  bookingSchema.
  pre("findOne", async function (next) {
    const booking = this as BookingModelType;
    try {
      await mongoose.model("restaurants").updateOne(
        { _id: booking.restaurant },
        { $set: { bookings: booking._id } }
      );

      await mongoose.model("clients").updateOne(
        { _id: booking.client },
        { $set: { bookings: booking._id } }
      );
    } catch (e) {
      console.error(e)
    }
  });
  */

  // Si no especifica fecha, se añade la fecha actual
  bookingSchema.
  pre("save", async function (next) {
    const booking = this as BookingModelType;
    try {
      if(!booking.date){
        booking.date = new Date();
      }
    } catch (e) {
      console.error(e)
    }
  });

export type BookingModelType = mongoose.Document &
  Omit<Booking, "id">

export const BookingModel = mongoose.model<BookingModelType>("Booking", bookingSchema);