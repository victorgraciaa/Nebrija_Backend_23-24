/*
export enum MASCOTATYPE {
  perro = "perro",
  gato = "gato",
  serpiente = "serpiente"
}
*/

export type Mascota = {
  //CORRECION id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  //CORRECION type: MASCOTATYPE
};
