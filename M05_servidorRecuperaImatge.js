/*
 * Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 12.12.16
 * format del document UTF-8
 *
 * CHANGELOG
 * 12.12.16
 * - Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
 * 09.03.2026
 * - Actualització a NodeJS 24
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var fs = require('fs');

function iniciar() {
    function onRequest(request, response) {
        let sortida;
        const protocol = request.socket && request.socket.encrypted ? 'https' : (request.headers['x-forwarded-proto'] || 'http');
        const baseURL = protocol + '://' + request.headers.host + '/';
        const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;
		
        if (pathname == '/inici') {
            fs.readFile('./M05_recuperaImatge.html', function(err, sortida) {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end('Error llegint el fitxer.');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.end(sortida);
            });

        } else if (pathname == '/imatge') {
            fs.readFile('./M05_ajax.png', function(err, sortida) {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end('Error llegint la imatge.');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'image/png' });
                response.end(sortida);
            });
        } else {
            response.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            sortida = "404 NOT FOUND";
            response.write(sortida);
            response.end();
        }

    }


    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
