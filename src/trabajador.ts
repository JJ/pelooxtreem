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
  extensiones = "Extensiones"
}


export class Trabajador{
  private servicios: Servicio[];

  constructor(servicios: Servicio[]){
    this.servicios = servicios;
  }
}