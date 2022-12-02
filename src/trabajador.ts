
import { Servicio } from "./servicio.ts";

export class Trabajador {
  private serviciosStore: Servicio[];

  constructor(servicios: Servicio[]) {
    this.serviciosStore = servicios;
  }

  get servicios() { return this.serviciosStore; }

}
