import { TiempoServicio } from "./tiempo-servicio.ts";

enum TipoServicio {
    corteHombre = "Corte Hombre",
    corteMujer = "Corte Mujer",
    mechasHombre = "Mechas Hombre",
    mechasMujer = "Mechas Mujer",
    arregloBarba = "Arreglo Barba",
    lavado = "Lavado",
    alisado = "Alisado",
    peinado = "Peinado",
    ondulacion = "Ondulacion",
    extensiones = "Extensiones"
}
    
export class Servicio {
    
    constructor(nombre: TipoServicio, tiempo: TiempoServicio){
        this.nombre = nombre;
        this.tiempo = tiempo;
    }
    
    nombre: TipoServicio;
    tiempo: TiempoServicio;
}