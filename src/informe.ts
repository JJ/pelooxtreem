import { Turno } from "./turno.ts";
import { Servicio } from "./servicio.ts"

// deno-lint-ignore no-unused-vars
class Informe {
    fecha: Date;
    turno: Turno;
    nServicio: Map<Servicio, number>;
    // Tiempo medio de servicios realizados expresados en minutos
    tMedioServicio: Map<Servicio,number>;
    nTrabajador: number;
    // Tiempo medio de espera expresado en minutos
    tMedioEspera: number;

    constructor(fechaParametro:Date, turnoParametro: Turno, nServicioParametro: Map<Servicio, number>, tMedioServicioParametro: Map<Servicio,number>, nTrabajadorParametro: number, tMedioEsperaParametro: number){
        this.fecha = fechaParametro;
        this.turno = turnoParametro;
        this.nServicio = nServicioParametro;
        this.tMedioServicio = tMedioServicioParametro;
        this.nTrabajador = nTrabajadorParametro;
        this.tMedioEspera = tMedioEsperaParametro; 
    }
}
