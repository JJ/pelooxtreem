# Hack-a-hair

Hackatón para trabajar en la asignatura IV, el 18 de noviembre de 2021

## Comprobar Sintaxis
Para comprobar la sintaxis se hace uso de la orden:
  - deno compile src/*.ts

## Elección de las herramientas
A la hora de la elección de las herramientas se van a tener en cuenta una serie de criterios:
  - Instalar el menor número de herramientas posibles.
  - Elegir herramientas actualizadas para no generar deuda técnica.

Teniendo esto en cuenta tenemos 3 runtimes como posibles opciones:
  - Node: Trae instalado npm por defecto, por lo que podríamos usarlo como gestor de tareas y gestor de dependencias. Debido al bajo rendimiento de npm, se puede usar pnpm sin generar deuda técnica. Por contraparte, sería necesario elegir un test runner y una biblioteca de aserciones. Para instalar el menor número de herramientas posibles, podemos hacer uso de Jasmine o de Jest como test runner, ya que incluyen sus propias bibliotecas de aserciones.
  - Deno: Deno instala dependencias mediante una URL or lo que no será necesario instalar un gestor de dependencias y puede actuar como gestor de tareas con la orden **deno task**. A la hora de los test, Deno incluye su propio test runner y si hacemos uso de la biblioteca de aserciones estándar no será necesario instalar nada.
  - Bun: Es un runtime "todo en uno" por lo que no será necesario instalar ni gestor de tareas ni gestor de dependencias. Cuenta con su propio test runner llamado wiptest que incluye una biblioteca de aserciones, aunque en estos momentos se encuentra en fase beta por lo que podría producirnos herrores, por lo que habría que elegir un test runner y una biblioteca de aserciones al igual que en Node.

Habiendo descrito todas las opciones posibles, vamos a usar Deno como runtime de la aplicación para tenerlo todo listo instalando únicamente Deno.