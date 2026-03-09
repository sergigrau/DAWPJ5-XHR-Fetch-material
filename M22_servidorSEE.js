/*
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {

    if (req.url === '/inici') {
      
        fs.readFile('./M22_SSE.html', function (err, sortida) {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            });
            res.write(sortida);
            res.end();
        });
    }
    else if (req.url === '/esdeveniments') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        setInterval(() => {
            const now = new Date();
            res.write(`data: ${now.toISOString()}\n\n`);
        }, 1000);
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});