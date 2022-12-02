import * as denoAssert from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { TiempoServicio } from "../src/tiempo-servicio.ts";

Deno.test("test TiempoServicio", () => {
    
    const t = new TiempoServicio("nombreServicio", "20000s", "10000s");
    denoAssert.assertNotEquals(t.nombre,"");
    denoAssert.assert(t.tiempoTotal.valueOf()>0 ,"tiempoTotal es 0");
    denoAssert.assert(t.tiempoUtil.valueOf()>0 ,"tiempoUtil es 0");
    denoAssert.assert(t.tiempoUtil.valueOf()<=t.tiempoTotal.valueOf() ,"tiempoUtil es mayor que tiempoTotal");
});