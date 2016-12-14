/**
 * Created by Administrateur on 14/12/2016.
 */
const net = require('net');

const server = net.createServer(c =>{
    c.write("HELLO");
    c.pipe(c); // écrit sur la sortie

    c.on('end', () => {  // gestion de évenement: par ex quand qq se déconnecte
        console.log("Le client s'est déconnecté");
    })
});

server.listen(1530, () => {
    console.log("Le serveur écoute sur le port 1530");
});