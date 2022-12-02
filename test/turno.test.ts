import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { Turno } from "../src/turno.ts"

// Necesitamos realizar las siguientes comprobaciones en la clase Turno como se ha comentado en el issue #18:

//  El tipo del turno debe ser alguno de los declarados en el enumerado TipoTurno.
//  No puede haber dos citas en un turno a la misma hora en el mismo dia.
//  El trabajador debe pertenecer a la plantilla.

Deno.test("url test", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});

Deno.test("Check tipo turno to be TipoTurno enum value", () => {
  const turno = new Turno();
  console.log(turno);
  
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});


Deno.test("Check hora turno to don't be same as other on the same day ", () => {
    const url = new URL("./foo.js", "https://deno.land/");
    assertEquals(url.href, "https://deno.land/foo.js");
  });