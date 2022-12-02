import { Servicio } from "./servicio.ts";
import { TipoServicio } from "./servicio.ts";

export class Trabajador{
  private servicios: Servicio[];

  constructor(servicios: Servicio[]){
    this.servicios = servicios;
  }

  public getServicios(): Servicio[]{
    return this.servicios;
  }
}

export function contieneServicios(serv: TipoServicio[]): boolean{
  let result = false;
  for(let i= 0; i < serv.length; i++){
    if(Object.values(TipoServicio).includes(serv[i])){
      result = true;
    }else{
      return false;
    }
  }
  return result;
}