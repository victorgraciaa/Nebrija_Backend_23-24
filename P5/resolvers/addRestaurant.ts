// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Restaurant } from "../types.ts";

import { RestaurantModel, RestaurantModelType } from "../db/restaurant.ts";
import { getRestaurantFromModel } from "../controllers/getRestaurantFromModel.ts";

export const addRestaurant = async (
  req: Request<{}, {}, RestaurantModelType>,
  res: Response<Restaurant | { error: unknown }>
) => {
  try {
    const { name, cif, address } = req.body;

    const restaurant = new RestaurantModel({
        name,
        cif,
        address
    });
    await restaurant.save();      

    const restaurantResponse: Restaurant = await getRestaurantFromModel(restaurant);

    res.status(201).json(restaurantResponse).send();
  } catch (error) {
    res.status(500).send(error);
  }
};