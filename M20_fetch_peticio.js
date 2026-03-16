/**
 * Codi que mostra el funcionament de l'API fetch
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 */

const proxyUrl = 'http://127.0.0.1:3000/itunes?term=queen&media=music&entity=album';

fetch(proxyUrl)
  .then(response => {
    console.log('Status:', response.status, 'Type:', response.type);
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  })
  .then(dades => {
    if (!dades || !dades.results) return console.warn('No results', dades);
    dades.results.forEach(el => console.log(el.artistName));
  })
  .catch(err => console.error('Fetch error:', err));