// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";

import { RestaurantModel } from "../db/restaurant.ts";

export const deleteRestaurant = async (
  req: Request<{ id: string }, {}>,
  res: Response<string | { error: unknown }>
) => {
  const id = req.params.id;
  const restaurant = await RestaurantModel.findByIdAndDelete(id).exec();
  if (!restaurant) {
    res.status(404).send({ error: "Restaurante no encontrado" });
    return;
  }
  res.status(200).send("Restaurante eliminado");
};