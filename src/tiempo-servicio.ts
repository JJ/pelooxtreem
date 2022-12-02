import Duration from "https://deno.land/x/durationjs@v4.1.0/mod.ts";


export class TiempoServicio{

    // Duración medio total que se tarda en realizar servicio
    tiempoTotal: Duration;

    // Tiempo que se trabaja directamente sobre el cliente
    tiempoUtil: Duration;

    // Los tiempos han de estar en el siguiente formato: 1h1m2s
    constructor(tiempoTotal:string, tiempoUtil: string){
        this.tiempoTotal = Duration.fromString(tiempoTotal);
        this.tiempoUtil = Duration.fromString(tiempoUtil);
    }

}
