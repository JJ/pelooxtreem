import { Trabajador } from "./trabajador.ts";
import { Cita } from "./cita.ts";

// Enumerado que indica el tipo de turno que hay en la peluquería

export enum TipoTurno {
  Maniana = "Maniana",
  Tarde = "Tarde",
}

// Objeto valor que almacena la información acerca de cada turno

export class Turno {
  // Tipo de turno que le toca al trabajador (mañana o tarde)
  private tipoTurnoStore: TipoTurno;

  // Lista de citas que constituyen cada turno
  private citasStore: Cita[];

  // Trabajador que atiende dicho turno
  private trabajadorStore: Trabajador;

  constructor(tipoTurno: TipoTurno, citas: Cita[], trabajador: Trabajador) {
    this.tipoTurnoStore = tipoTurno;
    this.citasStore = citas;
    this.trabajadorStore = trabajador;
  }

  get tipoTurno() { return this.tipoTurnoStore; }
  get citas() { return this.citasStore; }
  get trabajador() { return this.trabajadorStore; }

}
