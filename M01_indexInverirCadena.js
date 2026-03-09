/*
 * arxiu principal que arrenca el servidor HTTP
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - arxiu principal que arrenca el servidor HTTP
 * 01.11.2021
 * - Actualització a NodeJS 17
 * 09.03.2026
 * - Actualització a NodeJS 24
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var server = require("./M01_servidorInvertirCadena");

server.iniciar();