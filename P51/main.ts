// @deno-types="npm:@types/express@4"
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { getClient } from "./resolvers/getClient.ts";
import { getRestaurant } from "./resolvers/getRestaurant.ts";
import { getBooking } from "./resolvers/getBooking.ts";
import { addClient } from "./resolvers/addClient.ts";
import { addRestaurant } from "./resolvers/addRestaurant.ts";
import { addBooking } from "./resolvers/addBooking.ts";
import { deleteRestaurant } from "./resolvers/deleteRestaurant.ts";
import { deleteRestaurants } from "./resolvers/deleteRestaurants.ts";
import { deleteBooking } from "./resolvers/deleteBooking.ts";

try {
  const MONGO_URL = Deno.env.get("MONGO_URL");

  if (!MONGO_URL) {
    console.log("No mongo URL found");
    Deno.exit(1);
  }

  await mongoose.connect(MONGO_URL);
  const app = express();
  app.use(express.json());
  app
    .get("/client/:id", getClient)
    .get("/restaurant/:id", getRestaurant)
    .get("/booking/:id", getBooking)
    .post("/client", addClient)
    .post("/restaurant", addRestaurant)
    .post("/booking", addBooking)
    .delete("/restaurant/:id", deleteRestaurant)
    .delete("/restaurant", deleteRestaurants)
    .delete("/booking/:id", deleteBooking)

  app.listen(3000, () => {
    console.info("Server listening on port 3000");
  });

} catch (error) {
  console.error(error)
}


