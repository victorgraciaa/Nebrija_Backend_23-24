import { TipoModelType } from "../db/tipo.ts";
import { Tipo } from "../types.ts";

export const getTipoFromModel = async (Tipo: TipoModelType): Promise<Tipo> => {
  const { _id, atributo } = Tipo;

  return {
    atributo,    
  };
};