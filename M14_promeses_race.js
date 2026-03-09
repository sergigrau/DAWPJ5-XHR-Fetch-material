/**
 * Codi que mostra el funcionament de la creació d'una promesa i el seu ús
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

const espaiat = '10px';
const estils = `padding: ${espaiat}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`;

const promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'pimera');
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'segona');
});

Promise.race([promesa1, promesa2]).then((valor) => {
  console.log('%cvalor', estils);
});