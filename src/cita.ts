class Cita{
    trabajador : Trabajador;
    fecha_hora : Date;
    tipo_servicio: Servicio;

    constructor(trabajador: Trabajador, fecha_hora: Date, tipo_servicio: Servicio){
        this.trabajador = trabajador;
        this.fecha_hora = fecha_hora;
        this.tipo_servicio = tipo_servicio;
    }

    get Trabajador(){
        return this.trabajador;
    }

    get Fecha_Hora(){
        return this.fecha_hora;
    }

    get Tipo_Servicio(){
        return this.tipo_servicio;
    }

}