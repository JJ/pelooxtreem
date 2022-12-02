import { assert } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import Cita from '../src/cita.ts';                        // Clase Cita
import { Servicio } from '../src/trabajador.ts';          // Enum Servicio



// Comprobaciones para la fecha
Deno.test('Comprobaciones para la fecha', () => {
    const nuevaCita: Cita = new Cita(new Date("2022-12-03"), []);
    const fechaActual = new Date();

    assert(fechaActual < nuevaCita.fecha_hora, "La fecha introducida no puede ser anterior a la actual")
})


// Comprobaciones para la fecha
Deno.test('Comprobaciones de la hora', () => {

    
})


// Comprobaciones para el servicio dado
Deno.test('Comprobaciones del servicio', () => {

    
})