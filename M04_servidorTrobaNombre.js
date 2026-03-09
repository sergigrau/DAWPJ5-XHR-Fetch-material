/*
 * Aplicació amb Node.js HTTP que demana que s'encerti un numero al usuari
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Aplicació amb Node.js HTTP que demana que s'encerti un numero al usuari
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
var aleatori = Math.ceil(Math.random()*10);
function iniciar() {
	function onRequest(request, response) {
		let sortida;
		const protocol = request.socket && request.socket.encrypted ? 'https' : (request.headers['x-forwarded-proto'] || 'http');
		const baseURL = protocol + '://' + request.headers.host + '/';
		const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;
		
		let res = reqUrl.searchParams.get('res');

		console.log("Petició per a  " + pathname + " rebuda.");
		if (pathname == '/inici') {
			fs.readFile('./M04_trobaNombre.html', function(err, sortida) {
				if (err) {
					response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
					response.end('Error llegint el fitxer.');
					return;
				}
				console.log(aleatori);
				response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				response.end(sortida);
			});

		} else if (pathname == '/verificar') {
			response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
			if (Number(res) === aleatori) {
				response.end('CORRECTE');
			} else {
				response.end('INCORRECTE');
			}
		} else {
			response.writeHead(404, {
				"Content-Type" : "text/html; charset=utf-8"
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
