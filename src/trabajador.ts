export enum Servicio {
  corteHombre = "Corte Hombre",
  corteMujer = "Corte Mujer",
  mechasHombre = "Mechas Hombre",
  mechasMujer = "Mechas Mujer",
  arregloBarba = "Arreglo Barba",
  lavado = "Lavado",
  alisado = "Alisado",
  peinado = "Peinado",
  ondulacion = "Ondulacion",
  extensiones = "Extensiones",
}

export class Trabajador {
  private serviciosStore: Servicio[];

  constructor(servicios: Servicio[]) {
    this.serviciosStore = servicios;
  }

  get servicios() { return this.serviciosStore; }
}
