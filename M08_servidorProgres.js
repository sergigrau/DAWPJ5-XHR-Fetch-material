/*
 * Aplicació amb Node.js HTTP que permet recuperar dades d'un formulari per XHR2 amb progrés
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 13.11.20
 * format del document UTF-8
 *
 * CHANGELOG
 * date 13.11.20
 * - Aplicació amb Node.js HTTP que permet recuperar dades d'un formulari per XHR2
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
 * 09.03.2026
 * - Actualització a NodeJS 24
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
const http = require("http");
const fs = require('fs');
const formidable = require('formidable');

function iniciar() {
    function onRequest(request, response) {
        let sortida;
        const protocol = request.socket && request.socket.encrypted ? 'https' : (request.headers['x-forwarded-proto'] || 'http');
        const baseURL = protocol + '://' + request.headers.host + '/';
        const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;
        
        if (pathname == '/inici') {
            fs.readFile('./M08_formulariProgresXHR.html', function (err, sortida) {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end('Error llegint el fitxer.');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.end(sortida);
            });

        } else if (pathname == '/enviar') {

            const form = formidable({ multiples: true });

            form.parse(request, (err, fields, files) => {
                response.writeHead(200, { 'content-type': 'application/json' });
                response.end(JSON.stringify({ fields, files }, null, 2));
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
