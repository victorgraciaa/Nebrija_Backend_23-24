// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Restaurant } from "../types.ts";
import { RestaurantModel } from "../db/restaurant.ts";
import { getRestaurantFromModel } from "../controllers/getRestaurantFromModel.ts";

export const getRestaurant = async ( req: Request<{ id: string }>, res: Response<Restaurant | { error: unknown }> ) => {
  const id = req.params.id;
  try {
    const restaurant = await RestaurantModel.findById(id).exec();
    if (!restaurant) {
      res.status(404).send({ error: "Restaurante no encontrada" });
      return;
    }
    const restaurantResponse: Restaurant = await getRestaurantFromModel(restaurant);
    res.status(200).json(restaurantResponse).send();
  } catch (error) {
    res.status(500).send(error);
  }
};