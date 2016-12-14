/**
 * Created by Administrateur on 14/12/2016.
 */
const http = require('http');

const server = http.createServer((req, res) => {

    res.end('HELLO');
})

server.listen(8080, () => {
    console.log("Le serveur écoute sur le port 8080");
});