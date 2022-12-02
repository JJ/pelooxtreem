import { Servicio } from "./servicio.ts";

export class Trabajador{
  private servicios: Servicio[];

  constructor(servicios: Servicio[]){
    this.servicios = servicios;
  }
}
