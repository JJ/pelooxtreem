import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import Duration from "https://deno.land/x/durationjs@v4.1.0/mod.ts"; 
import { Informe } from "../src/informe";
import { Servicio } from "../src/servicio";
import { TiempoServicio } from "../src/tiempo-servicio";
import { TipoTurno, Turno } from "../src/turno";
import { Cita } from "../src/cita"


Deno.test("clase informe", () => {

    let fecha1: Date = new Date();

    let fecha2: Date = new Date(fecha1.getDate() - 1);

    let t_servicio: TiempoServicio = new TiempoServicio('uno','0h30m0s', '0h25m0s');

    let servicio: Servicio = new Servicio(TipoServicio.lavado, t_servicio);

    let cita1: Cita = new Cita(fecha1, servicio);

    let cita2: Cita = new Cita(fecha2, servicio);

    let citas: Cita[] =  [cita1, cita2];

    let trabajador: Trabajador = new Trabajador([servicio]);

    let turno: Turno = new Turno(TipoTurno.Maniana, citas,  trabajador);

    Informe informe = new Informe(fecha1, turno, )
    
});