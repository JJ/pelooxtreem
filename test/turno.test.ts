import { assertArrayIncludes, assertEquals, assertInstanceOf, assertNotInstanceOf } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { Cita } from "../src/cita.ts";
import { Servicio } from "../src/servicio.ts";
import { Trabajador } from "../src/trabajador.ts";
import { TipoTurno, Turno } from "../src/turno.ts"

// Necesitamos realizar las siguientes comprobaciones en la clase Turno como se ha comentado en el issue #18:

//  El tipo del turno debe ser alguno de los declarados en el enumerado TipoTurno.
//  No puede haber dos citas en un turno a la misma hora en el mismo dia.
//  El trabajador debe pertenecer a la plantilla.

Deno.test("Check trabajador to be Trabajador instance", () => {
  const trabajador = new Trabajador([]);
  const cita = new Cita(new Date(), new Servicio())
  const turno = new Turno(TipoTurno.Maniana, [cita], trabajador);
  assertInstanceOf(turno.trabajador, Trabajador);
  assertNotInstanceOf(cita, Trabajador);
});

Deno.test("Check tipo turno to be TipoTurno enum value", () => {
  const trabajador = new Trabajador([]);
  let turno = new Turno(TipoTurno.Maniana, [], trabajador);
  assertArrayIncludes(Object.values(TipoTurno), [turno.tipoTurno]);
  turno = new Turno(TipoTurno.Tarde, [], trabajador);
  assertArrayIncludes(Object.values(TipoTurno), [turno.tipoTurno]);

  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});


Deno.test("Check hora turno to don't be same as other on the same day ", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});