/**
 * Codi que mostra el funcionament de la creació d'una promesa i el seu ús
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

new Promise((resolver, reject) => {
    console.log("%cprimera tasca ", "color: yellow; text-transform: uppercase");
    resolver('primera');
})
.then((exit) => {
    console.log(`%csegona tasca que es fa després de ${exit}`, "color: yellow; text-transform: uppercase");
    return 'segona';
})
.then((exit) => {
    console.log(`%ctercera tasca que es fa després de ${exit}`, "color: yellow; text-transform: uppercase");
    return 'segona';
})
.then((anterior) => {
    throw new Error('Algo falló');
})
.catch((e) => {
    console.error("¡error! " + e);
    return 'error';
})
.then((anterior) => {
    console.log(`%ctasca final que es fa després de ${anterior}`, "color: yellow; text-transform: uppercase");
});


/* Antigament calia fer
hazAlgo(function(resultado) {
  hazAlgoMas(resultado, function(nuevoResultado) {
    hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Obtenido el resultado final: ' + resultadoFinal
    }, falloCallback);
  }, falloCallback);
}, falloCallback);
*/