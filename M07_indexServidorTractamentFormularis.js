/*
 * arxiu principal que arrenca el servidor HTTP
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 13.11.20
 * format del document UTF-8
 *
 * CHANGELOG
 * date 13.11.20
 * - arxiu principal que arrenca el servidor HTTP
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
 * 09.03.2026
 * - Actualització a NodeJS 24
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var server = require("./M07_servidorTractamentFormularis");

server.iniciar();
