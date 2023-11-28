// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Client } from "../types.ts";

import { ClientModel, ClientModelType } from "../db/client.ts";
import { getClientFromModel } from "../controllers/getClientFromModel.ts";

export const addClient = async (
  req: Request<{}, {}, ClientModelType>,
  res: Response<Client | { error: unknown }>
) => {
  try {
    const { firstName, lastName, email, phoneNumber, dni } = req.body;

    const client = new ClientModel({
        firstName,
        lastName,
        email,
        phoneNumber,
        dni
    });
    await client.save();      

    const clientResponse: Client = await getClientFromModel(client);

    res.status(201).json(clientResponse).send();
  } catch (error) {
    res.status(500).send(error);
  }
};