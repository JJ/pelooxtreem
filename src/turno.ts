// Objeto valor que almacena la información acerca de cada turno

export class Turno {
    // Tipo de turno que le toca al trabajador (mañana o tarde)
    tipo_turno: TipoTurno;

    // Lista de citas que constituyen cada turno
    citas: Cita[];

    // Trabajador que atiende dicho turno
    trabajador: Trabajador;
}