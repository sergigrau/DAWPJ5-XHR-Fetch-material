/*
 * Servidor HTTP que presenta diverses operacions artimètiques a l'usuari
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Servidor HTTP que presenta diverses operacions artimètiques a l'usuari
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
var operacions = ['1+2', '2*2'];
var numOperacio = 0;
var encertades = 0;
function iniciar() {
	function onRequest(request, response) {
		let sortida;
		const protocol = request.socket && request.socket.encrypted ? 'https' : (request.headers['x-forwarded-proto'] || 'http');
		const baseURL = protocol + '://' + request.headers.host + '/';
		const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;
		
		let res = reqUrl.searchParams.get('res');
		if (pathname == '/inici') {
			fs.readFile('./M03_operacions.html', function(err, sortida) {
				if (err) {
					response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
					response.end('Error llegint el fitxer.');
					return;
				}
				numOperacio = 0;
				encertades = 0;
				response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				response.end(sortida);
			});

		} else if (pathname == '/obtenirOperacio') {
			response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
			if (numOperacio == 0) {
				response.write(operacions[numOperacio++]);
			} else if (numOperacio < operacions.length) {
				if (Number(res) === eval(operacions[numOperacio - 1])) encertades++;
				response.write(operacions[numOperacio++]);
			} else {
				if (Number(res) === eval(operacions[numOperacio - 1])) encertades++;
				response.write('FINAL = ' + encertades);
			}
			response.end();
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
