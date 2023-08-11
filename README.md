# Configuración del proyecto

## Instalando TypeScript con Node
En la terminal, ejecutemos npm `init -y` dentro de la ruta de nuestro proyecto para inicializar Node con una configuración por defecto.

## Instalación
Lo instalaremos de forma local, es decir, solo para nuestro proyecto:

`npm i typescript --save-dev`

## Versión Descargada
Podemos verificar la versión instalada de TypeScript:

`npx tsc --version`

## Configuración por defecto
Inicialicemos TypeScript con una configuración básica:

`npx tsc --init`

## Ruta del Output
Configuremos la ruta en donde se guardarán nuestros archivos transpilados de TypeScript:

- Vamos al archivo tsconfig.json del proyecto.

- Busquemos el atributo "outDir" y descomentemos esa línea de código de ser necesario.
- Indicamos que todos los archivos transpilados sean almacenados en una carpeta llamada

Para comprobar que esto funciona, vamos a crear una carpeta src y dentro generemos un archivo demo.ts con el siguiente código de ejemplo:

```ts
type UserId = string | number;
let userId: UserId;

userId = 'string';
userId = 1;
```

## Transpilación
Ahora ejecutemos mediante la terminal el comando `npx tsc` para transpilar el código TypeScript. Automáticamente, se nos creará una carpeta `dist`.

Es posible también transpilar de forma constante ante cualquier cambio que hagamos en nuestros archivos TypeScript:

`npx tsc --watch`

## Librería ts-node
Esta librería nos permite ejecutar directamente TypeScript en NodeJS. Con esto nos ahorramos el tener que transpilar archivos TypeScript primero y luego ejecutar los archivos transpilados JavaScript con Node.
https://typestrong.org/ts-node/

## Instalación de ts-node
Ejecutamos el siguiente comando:

`npm install -D ts-node`

Antes de pasar a ejecutar nuestro código TypeScript con esta librería, agreguemos console.log('Hoola!' + userId); en nuestro archivo demo.ts.

## Ejecutando TypeScript con ts-node
Para ello, en la terminal digitamos `npx ts-node` seguido del nombre del archivo TypeScript a ejecutar o la ruta donde se encuentre dicho archivo dentro de un determinado proyecto:

`npx ts-node src/demo.ts`

En nuestro caso, nuestro archivo `demo.ts` se encuentra dentro de la carpeta **src**.

***Nota:*** `ts-node` se puede correr en producción pero se recomienda que se use en dev y en un ambiente de `node.js`, para proyectos de front-end si es necesario estar haciendo la transpilación de **ts** a **js**.
