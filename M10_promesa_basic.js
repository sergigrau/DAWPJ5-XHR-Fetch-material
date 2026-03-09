/**
 * Codi que mostra el funcionament de la creació d'una promesa i el seu ús
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 * 09.03.2026
 * - Actualització a NodeJS 24
 */
let promesa = new Promise((resolve, reject) => {
    // Fem una crida a resolve (...) quan el que estàvem fent finalitza amb èxit, i reject (...) quan falla.
    // En aquest exemple, fem servir setTimeout (...) per simular codi asíncron.
    // A la vida real, probablement facis servir alguna cosa com XHR o una API HTML5.
    setTimeout(function(){
      resolve("OK!"); 
    }, 250);
  });
  
  promesa.then((enCasExit) => {
    // succesMessage és el que sigui que passem a la funció resolve (...) de dalt.
    // No té per què ser un string, però si només és un missatge d'èxit, probablement ho sigui.
    console.log("%c¡Sí! " + enCasExit, "color: yellow; text-transform: uppercase");

  });