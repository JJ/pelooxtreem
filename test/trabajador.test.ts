import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { contieneServicios, Trabajador } from "../src/trabajador.ts";
import {TipoServicio} from "../src/servicio.ts";


const servicios: TipoServicio[] = [TipoServicio.corteHombre,TipoServicio.extensiones];


Deno.test("Los servicios del trabajador pertenecen a la lista de servicios", () => {
  assertEquals(contieneServicios(servicios),true);
})