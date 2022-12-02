import Duration from "https://deno.land/x/durationjs@v4.1.0/mod.ts";

export class TiempoServicio {
  // Duración medio total que se tarda en realizar servicio
  private nombreStore: string;

  // Duración medio total que se tarda en realizar servicio
  private tiempoTotalStore: Duration;

  // Tiempo que se trabaja directamente sobre el cliente
  private tiempoUtilStore: Duration;

  // Los tiempos han de estar en el siguiente formato: 1h1m2s
  constructor(nombre: string, tiempoTotal: string, tiempoUtil: string) {
    this.nombreStore = nombre;
    this.tiempoTotalStore = Duration.fromString(tiempoTotal);
    this.tiempoUtilStore = Duration.fromString(tiempoUtil);
  }

  get nombre() { return this.nombreStore; }
  get tiempoTotal() { return this.tiempoTotalStore; }
  get tiempoUtil() { return this.tiempoUtilStore; }

}
