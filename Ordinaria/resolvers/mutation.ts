import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../db/contacto.ts";
import mongoose from "mongoose";

export const Mutation = {
  addContacto: async (_: unknown, args: {nombreApellidos: string; nmro: string})
  : Promise<ContactoModelType> => {

    //Validación del número
    const url1 = `https://api.api-ninjas.com/v1/validatephone?number=${args.nmro}`
    const response1 = await fetch(url1,
        {
            headers: {
                "X-Api-Key": "NHjMJCt4XcPOTX08PGrwaw==ukwZXDFYVi1V5uzg",
                
            },
            //error: throw new GraphQLError("Número no válido")

        })
    const data1 = await response1.json()
    const pais = data1.country

    //Hallo la capital del país del número de teléfono
    const url2 = `https://api.api-ninjas.com/v1/country?name=${pais}`
    const response2 = await fetch(url2,
        {
            headers: {
                "X-Api-Key": "NHjMJCt4XcPOTX08PGrwaw==ukwZXDFYVi1V5uzg"
            }
        })
    const data2 = await response2.json()
    const capital = data2.capital

    //Obtengo la hora introduciendo la capital anteriormente hallada en la URL de la API
    const url3 = `https://api.api-ninjas.com/v1/worldtime?city=${capital}`
    const response3 = await fetch(url3,
        {
            headers: {
                "X-Api-Key": "NHjMJCt4XcPOTX08PGrwaw==ukwZXDFYVi1V5uzg"
            }
        })
    const data3 = await response3.json()
    const horaPais = data3.datetime

    const contacto = {
        nombreApellidos: args.nombreApellidos,
        nmro: args.nmro,
        pais: pais,
        horaPais: horaPais        
    }
    const newContacto = await ContactoModel.create(contacto)

    return newContacto
  },

  deleteContacto: async (_: unknown, args: {id: string}): Promise<boolean>  => {
    const contacto = await ContactoModel.findByIdAndDelete(args.id)
    if(!contacto){
        return false
        throw new GraphQLError(`No existe contacto con id: ${args.id}`, {extensions: { code: "NOT_FOUND"}})        
    }
    return true
  },

  updateContacto: async (_: unknown, args: {id: string, nombreApellidos: string, nmro: string}): Promise<ContactoModelType>  => {
    const contacto = await ContactoModel.findByIdAndUpdate(args.id)
    if(!contacto){
        throw new GraphQLError(`No existe contacto con id: ${args.id}`, {extensions: { code: "NOT_FOUND"}})        
    }

    contacto.nombreApellidos = args.nombreApellidos
    contacto.nmro = args.nmro

    contacto.save()

    return contacto
  }

};
