/*
 * Servidor HTTP que rep una cadena i la retorna invertida
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Servidor HTTP que rep una cadena i la retorna invertida
 *
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
 * 09.03.2026
 * - Actualització a NodeJS 24
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var fs = require('fs');

function iniciar() {
	function onRequest(peticio, resposta) {
		let sortida;
		const protocol = peticio.headers['x-forwarded-proto'] || 'http'; 
		const baseURL = protocol + '://' + peticio.headers.host + '/';
		const reqUrl = new URL(peticio.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;

		if (pathname == '/formulari') {
			fs.readFile('./M01_invertirCadena.html', function(err, sortida) {
				if (err) {
					resposta.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
					resposta.end('Error llegint el fitxer.');
					return;
				}
				resposta.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				resposta.write(sortida);
				resposta.end();
			});
		} else if (pathname == '/invertir') {
			resposta.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
			let cadena = reqUrl.searchParams.get('cadena') || '';
			sortida = cadena.split("").reverse().join("");
			resposta.end(sortida);
		} else {
			resposta.writeHead(404, {
				"Content-Type" : "text/html; charset=utf-8"
			});
			sortida = "404 NOT FOUND";
			resposta.write(sortida);
			resposta.end();
		}

	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
