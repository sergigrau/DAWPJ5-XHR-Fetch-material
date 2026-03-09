/*
 * arxiu principal que arrenca el servidor HTTP
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 12.12.16
 * format del document UTF-8
 *
 * CHANGELOG
 * 12.12.16
 * - arxiu principal que arrenca el servidor HTTP
 * 09.03.2026
 * - Actualització a NodeJS 24
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var server = require("./M06_servidorRecuperaImatgeBlob");

server.iniciar();
