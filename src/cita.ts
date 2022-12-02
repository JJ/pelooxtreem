import { Servicio } from "./servicio.ts"

export default class Cita {
    fecha_hora : Date;
    tipo_servicio: Servicio;

    constructor(fecha_hora: Date, tipo_servicio: Servicio){
        this.fecha_hora = fecha_hora;
        this.tipo_servicio = tipo_servicio;
    }
    
    get Fecha_Hora(){
        return this.fecha_hora;
    }

    get Tipo_Servicio(){
        return this.tipo_servicio;
    }

}