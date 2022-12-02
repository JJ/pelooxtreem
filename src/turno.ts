import { Trabajador } from "./trabajador.ts";
import { Cita } from "./cita.ts"

// Enumerado que indica el tipo de turno que hay en la peluquería

export enum TipoTurno {
    Maniana = 'Maniana'
    Tarde = 'Tarde'
}

// Objeto valor que almacena la información acerca de cada turno

export class Turno {
    // Tipo de turno que le toca al trabajador (mañana o tarde)
    private tipo_turno: TipoTurno;

    // Lista de citas que constituyen cada turno
    private citas: Cita[];

    // Trabajador que atiende dicho turno
    private trabajador: Trabajador;

    constructor (tipo_turno: TipoTurno, citas: Cita[], trabajador: Trabajador) {
        this.tipo_turno = tipo_turno;
        this.citas = citas;
        this.trabajador = trabajador;
    }
