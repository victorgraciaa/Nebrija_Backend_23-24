import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../db/contacto.ts";

export const Query = {
  getContacto: async (_: unknown, args: {id: string}): Promise<ContactoModelType> => {
    const contacto = await ContactoModel.findById(args.id)
    if(!contacto){
        throw new GraphQLError(`No existe contacto con id: ${args.id}`, {extensions: { code: "NOT_FOUND"}})
    }
    return contacto
  },

  getContactos: async (_: unknown, args: {id: string}): Promise<ContactoModelType[]> => {
    const contactos = await ContactoModel.find().exec()
    return contactos
  }
};