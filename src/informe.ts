import { Turno } from "./turno.ts";
import { Servicio } from "./servicio.ts"

export class Informe {
    private fechaStore: Date;
    private turnoStore: Turno;
    private nServicioStore: Map<Servicio, number>;
    // Tiempo medio de servicios realizados expresados en minutos
    private tMedioServicioStore: Map<Servicio,number>;
    private nTrabajadorStore: number;
    // Tiempo medio de espera expresado en minutos
    private tMedioEsperaStore: number;

    constructor(fechaParametro:Date, turnoParametro: Turno, nServicioParametro: Map<Servicio, number>, tMedioServicioParametro: Map<Servicio,number>, nTrabajadorParametro: number, tMedioEsperaParametro: number){
        this.fechaStore = fechaParametro;
        this.turnoStore = turnoParametro;
        this.nServicioStore = nServicioParametro;
        this.tMedioServicioStore = tMedioServicioParametro;
        this.nTrabajadorStore = nTrabajadorParametro;
        this.tMedioEsperaStore = tMedioEsperaParametro;
    }

    get fecha() { return this.fechaStore; }
    get turno() { return this.turnoStore; }
    get nServicio() { return this.nServicioStore; }
    get tMedioServicio() { return this.tMedioServicioStore; }
    get nTrabajador() { return this.nTrabajadorStore; }
    get tMedioEspera() { return this.tMedioEsperaStore; }

}
