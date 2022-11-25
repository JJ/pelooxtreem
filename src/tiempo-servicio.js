import Duration from "https://deno.land/x/durationjs@v4.1.0/mod.ts"; 


export class TiempoServicio{

    // Nombre del servicio
    nombre: string;

    // Duración medio total que se tarda en realizar servicio
    tiempoTotal: Duration;

    // Tiempo que se trabaja directamente sobre el cliente
    tiempoUtil: Duration;

    // Los tiempos han de estar en el siguiente formato: 1h1m2s
    constructor(nombre:String, tiempoTotal:String, tiempoUtil: String){
        this.nombre = nombre;
        this.tiempoTotal = Duration.fromString(tiempoTotal);
        this.tiempoUtil = Duration.fromString(tiempoUtil);
    }

}
