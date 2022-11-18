import { Turno } from "./turno.ts";

class Informe{
    turno: Turno;
    nServicio: Map <Servicio, number>;
    tMedioServicio: Map<Servicio,number>;
    nTrabajador: number;
    tMedioEspera: number;
}