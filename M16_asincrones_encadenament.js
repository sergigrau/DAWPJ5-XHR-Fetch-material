/**
 * Codi que mostra el funcionament d'encadenament de funcions asíncrones
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

function divisioPromesa(a, b, ms = 500) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (b === 0) {
              reject(new Error("divisió per zero"));
          } else {
              resolve(a / b);
          }
      }, ms);
  });
}

async function divisioAsincrona(a, b, ms = 500) {
  const resultat = await divisioPromesa(a, b, ms);
  console.info(resultat);
  return resultat;
}
  
async function encadenadaAsincrona() {
  const r1 = await divisioAsincrona(900, 3),
        r2 = await divisioAsincrona(r1, 2),
        r3 = await divisioAsincrona(r2, 5);
  return r3;
}

encadenadaAsincrona();