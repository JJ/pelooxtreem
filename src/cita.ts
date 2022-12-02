import { Servicio } from "./servicio.ts";

export class Cita {
  private fechaHora: Date;
  private tipoServicio: Servicio;

  constructor(fechaHora: Date, tipoServicio: Servicio) {
    this.fechaHora = fechaHora;
    this.tipoServicio = tipoServicio;
  }

  get FechaHora() { return this.fechaHora; }
  get TipoServicio() { return this.tipoServicio; }
}
