
import { Servicio } from "./servicio";

export class Trabajador{
  private nTrabajador: number;
  private servicios: Servicio[];

  constructor(nTrabajador: number,servicios: Servicio[]){
    this.servicios = servicios;
    this.nTrabajador = nTrabajador;
  }
}
