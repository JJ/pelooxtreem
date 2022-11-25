export enum tipos_servicio {
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

export type Servicio = {
  nombre: string;
  tiempo: string;
};
