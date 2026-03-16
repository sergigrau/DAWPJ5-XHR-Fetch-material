/**
 * Codi que mostra el funcionament de l'API fetch
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 */

async function cridaRemota(url = '', cos = {}) {
  // Les opciones per defecte estan marcades amb *
  const response = await fetch(url);
  return response.json(); // passa de JSON a objecte JS
}

cridaRemota('http://127.0.0.1:3000/itunes?term=queen&media=music&entity=album', { cos: 42 })
  .then(dades => {
    console.table(dades.results); 
  });
