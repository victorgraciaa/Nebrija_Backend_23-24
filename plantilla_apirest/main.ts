// @deno-types="npm:@types/express@4"
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { getTipo } from "./resolvers/getTipo.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .get("/tipo", getTipo)
  .post("/", async (req: Request, res: Response) => {})
  .put("/", async (req: Request, res: Response) => {})
  .delete("/", async (req: Request, res: Response) => {})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
