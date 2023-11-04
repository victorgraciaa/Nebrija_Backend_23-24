import { Request, Response } from "npm:express@4.18.2";
import ClienteModel from "../db/cliente.ts";

const addDinero = async (req: Request, res: Response) => {
  try {
    const { idCliente, dineroSumado } = req.params;
    
    const dineroSumado1= parseInt(dineroSumado, 10)

    if (!idCliente ||!dineroSumado1){
      res.status(400).send("Id y dinero son necesarios");
      return;
    }

    if(dineroSumado1<0){
      res.status(400).send("El dinero sumado debe ser un numero positivo")
      return
    }

    const cliente = await ClienteModel.findById( idCliente ).exec()
    if(!cliente){
        res.status(404).send("Cliente vendedor no encontrado")
        return
    }

    cliente.dinero += dineroSumado1    
    await cliente.save()

  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addDinero;