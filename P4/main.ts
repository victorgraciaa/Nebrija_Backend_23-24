import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

import getCochesConcesionario from "./resolvers/getCochesConcesionario.ts";
import getCochesCliente from "./resolvers/getCochesCliente.ts";
import addCoche from "./resolvers/addCoche.ts";
import addCliente from "./resolvers/addCliente.ts";
import addConcesionario from "./resolvers/addConcesionario.ts";
import enviarCocheConcesionario from "./resolvers/enviarCocheConcesionario.ts";
import deleteCocheCliente from "./resolvers/deleteCocheCliente.ts";
import venderCocheCliente from "./resolvers/venderCocheCliente.ts";
import traspasarCoche from "./resolvers/traspasarCoche.ts";
import addDinero from "./resolvers/addDinero.ts";
import deleteCocheConcesionario from "./resolvers/deleteCocheConcesionario.ts";

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
  .get("/concesionarios/:idConcesionario", getCochesConcesionario) 
  .get("/clientes/:idCliente", getCochesCliente)
  .post("/coches", addCoche) 
  .post("/clientes", addCliente) 
  .post("/concesionarios", addConcesionario)
  .post("/concesionarios/:idConcesionario/:idCoche", enviarCocheConcesionario) 
  .put("/clientes/:idClienteVendedor/:idClienteComprador/:matricula", traspasarCoche) 
  .put("/concesionarios/:idConcesionario/:idCliente/:idCoche", venderCocheCliente) 
  .put("/:idCliente/:dineroSumado", addDinero)
  .delete("/clientes/:idCliente/:idCoche", deleteCocheCliente)
  .delete("/concesionarios/:idConcesionario/:idCoche", deleteCocheConcesionario)


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
