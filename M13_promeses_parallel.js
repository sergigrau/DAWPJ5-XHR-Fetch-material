/**
 * Codi que mostra el funcionament de la creació d'una promesa i el seu ús
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

const promesa1 = Promise.resolve(3);
const promesa2 = 42;
const promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'DAW2');
});
console.time('temps');
Promise.all([promesa1, promesa2, promesa3])
  .then(([resultat1, resultat2, resultat3]) => {
    console.log(resultat1, resultat2, resultat3);
    console.timeEnd('temps');
  });
console.info('ha de sortir abans, doncs el codi anterior espera a totes les promeses');
