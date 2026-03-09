/**
 * Codi que mostra el funcionament de les funcions asíncrones
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


divisioAsincrona(3,3,3000); // es una crida asíncrona, quan tinguem el resultat es resoldrà
divisioAsincrona(2,3,2000); // es una crida asíncrona, quan tinguem el resultat es resoldrà
divisioAsincrona(1,3,1000); // es una crida asíncrona, quan tinguem el resultat es resoldrà

///més sobre asíncrones
const bar = async () => 42; // el codi d'aquesta funció asíncrona retorna una promesa
const bar2 = async () => {
  const x=42;
  console.log(x); 
  return x;
}

console.error(bar()); // es una crida asíncrona, quan tinguem el resultat es resoldrà al resolve NO es pot recuperar així
bar().then(e => console.log(e)); // es una crida asíncrona, quan tinguem el resultat es resoldrà
console.info(bar2()); // es una crida asíncrona, quan tinguem el resultat es resoldrà


console.info("aixó s'executa de manera seqüencial");