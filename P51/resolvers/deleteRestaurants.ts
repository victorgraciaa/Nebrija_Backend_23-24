// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";

import { RestaurantModel } from "../db/restaurant.ts";

export const deleteRestaurants = async (
  req: Request<{ id: string }, {}>,
  res: Response<string | { error: unknown }>
) => {

  const restaurants = await RestaurantModel.deleteMany({});
  if (!restaurants) {
    res.status(404).send({ error: "Restaurantes no encontrados" });
    return;
  }
  res.status(200).send("Restaurantes eliminados");
};