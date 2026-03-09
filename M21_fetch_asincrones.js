/**
 * Codi que mostra el funcionament de l'API fetch
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

async function cridaRemota(url = '', cos = {}) {
  // Les opciones per defecte estan marcades amb *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //si fem un GET cal desactivar-ho
    //body: JSON.stringify(data) // ha de coincidir amb la capçalera "Content-Type" 

  });
  return response.json(); // passa de JSON a objecte JS
}

cridaRemota('https://itunes.apple.com/search?term=queen&media=music&entity=album', { cos: 42 })
  .then(dades => {

    console.table(dades.results); 

    dades.results.forEach(element => {
      console.log(element.artistName);   
    });
    
  });
