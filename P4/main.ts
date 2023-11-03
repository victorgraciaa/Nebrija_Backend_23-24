/*
OBJETIVOS DE LA PRACTICA:

    Permite crear coches                                               --> OK
    Permite crear concesionarios                                       --> OK
    Permite crear cliente                                              --> OK
    Permite enviar coches a un concesionario
    Permite ver los coches de un concesionario
    Permite vender coches a un cliente
    Permite ver los coches de un cliente
    Permite eliminar coche de un concesionario
    Permite eliminar coche de un cliente
    Permite traspasar un coche de un cliente a otro
    Permite añadir dinero a un cliente para poder comprar un coche
    Permite bloquear la venta a ciertos concesionarios

*/

import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import addCoche from "./resolvers/addCoche.ts";
import addCliente from "./resolvers/addCliente.ts";
import addConcesionario from "./resolvers/addConcesionario.ts";
import enviarCocheConcesionario from "./resolvers/enviarCocheConcesionario.ts";
import deleteCocheCliente from "./resolvers/deleteCocheCliente.ts";

const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .post("/coches", addCoche) //Crea un coche
  .post("/clientes", addCliente) //Crea un cliente
  .post("/concesionarios", addConcesionario) //Crea un concesionario
  .put("/concesionarios/:id/:matricula", enviarCocheConcesionario)
  //.get("/clientes", getCochesCliente) //Muestra los coches de un cliente
  //.get("/concesionarios", getCochesConcesionario) //Muestra los coches de un concesionario
  //.delete("/clientes/:id/:matricula", deleteCocheCliente) //Borra el coche de un cliente
  //.delete("/concesionarios/:matricula", deleteCocheConcesionario) //Borra el coche de un concesionario


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
