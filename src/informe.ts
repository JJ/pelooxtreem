import { Turno } from "./turno.ts";

class Informe{
    fecha: Date;
    turno: Turno;
    nServicio: Map <Servicio, number>;
    //Tiempo medio de servicios realizados expresados en minutos
    tMedioServicio: Map<Servicio,number>;
    nTrabajador: number;
    //Tiempo medio de espera expresado en minutos
    tMedioEspera: number;
}