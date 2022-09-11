// On veux créer un serveur HTTP avec nodeJS et pour cela on va utiliser le module http
const http = require("http");
// Pour créer ce Serveur on utilise la fonction createServer, quand ce serveur va recevoir une requete on va rentrer dans la fonction qu'on lui passe en paramètre
console.log("Start server...");
http
  .createServer((req, res) => {
    // À chaque fois que quelqu'un se connecte sur le serveur(Sur le port 3500), cette fonction sera appeler
    console.log("Connecte sur le serveur(Sur le port 3500)");
    res.end("<h1>Hello world!</h1>");
  })
  .listen(3500);
