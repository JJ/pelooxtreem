import { assert } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import Cita from '../src/cita.ts';                        // Clase Cita
import { TipoServicio } from '../src/servicio.ts';          // Enum Servicio


// Comprobaciones para la fecha
Deno.test('Comprobaciones para la fecha', () => {
    const nuevaCita: Cita = new Cita(new Date("2022-12-03"), TipoServicio.corteHombre);
    const fechaActual = new Date();

    assert(fechaActual < nuevaCita.fecha_hora, "La fecha introducida no puede ser anterior a la actual");
})


// Comprobaciones para el servicio dado
Deno.test('Comprobaciones para el servicio', () => {
    const nuevaCita: Cita = new Cita(new Date("2022-12-03"), TipoServicio.corteHombre);

    assert(Object.values(TipoServicio).includes(nuevaCita.tipo_servicio),
           "El servicio debe pertenecer a la lista de servicios ofrecidos");
    
})