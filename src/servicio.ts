import { TiempoServicio } from "./tiempo-servicio.ts";

export enum tipo_servicio {
  corteHombre = "Corte Hombre",
  corteMujer = "Corte Mujer",
  mechasHombre = "Mechas Hombre",
  mechasMujer = "Mechas Mujer",
  arregloBarba = "Arreglo Barba",
  lavado = "Lavado",
  alisado = "Alisado",
  peinado = "Peinado",
  ondulacion = "Ondulacion",
  extensiones = "Extensiones"
}
    
export class Servicio {

  nombre: string;
  tiempo_servicio : TiempoServicio;

  constructor(nombre: string, tiempo_servicio: TiempoServicio){
    this.nombre = nombre;
    this.tiempo_servicio = tiempo_servicio;
  }

}
