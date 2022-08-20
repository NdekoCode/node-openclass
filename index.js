// On initialise le module HTTP
const http = require("http");
console.log("Start server");
// On créer notre serveur HTTP qu'on va faire ecouter sur le port:3500 auquel on passe une fonction qui va contenir la requete mais aussi la reponse en paramètre de la fonction
http
  .createServer(function (req, res) {
    console.log("New request");
    // Sur la reponse de la fin de la réponse du Server j'envois une chaine de caractère
    res.end("<h1>Hello World</h1>");
  })
  .listen(3500);
