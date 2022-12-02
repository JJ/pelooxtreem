import { Servicio } from "./servicio.ts"

class Peluqueria{
    npuestos: number;
    servicios: Servicio[];

    constructor(npuestos: number, servicios: Servicio[]){
        this.npuestos = npuestos;
        this.servicios = servicios;
    }

    get nPuestos(){
        return this.npuestos;
    }

    get Servicios(){
        return this.servicios;
    }
}