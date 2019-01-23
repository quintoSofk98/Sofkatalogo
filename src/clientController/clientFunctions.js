"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient;
var arr = [];

for (let i in clientList) {
    arr.push(clientList[i]);
}

(Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
    for (let j = 0; j < arr.length; j++) {
        showClient += arr[j].map(function (client) {
            return '<img src="' + client.img + '" style = "width: 200px""' + '" title="' + "img" + '" alt="' + "im" + '" />';
        });
    }

    document.getElementById("client").innerHTML = showClient;

})();

Client.prototype.getClientsPerson = (type) => {
    console.log('Obteniendo clientes de tipo: ' + type);
    var filterPersona = arr.filter(function (client) {
        return (client.type === "Persona")
    });
    console.log(filterPersona);
}

(Client.prototype.getClientsEnterprise = () => {

    document.getElementById("searchButton").addEventListener('click', () => {
        console.log('Obteniendo clientes de tipo: ');
        let cliSearched = document.getElementById("clientToSearch").value;
        let found;
        var show = arr[0].map((client) => {
            found = client.name === cliSearched.toUpperCase();
            if (found) {
                return '<img src="' + client.img + '" style = width: 20px"' + '" title="' + "img" + '" alt="' + "img" + '" />'
            } else {
                return '<h3>404 - Not Found <h3/>'
            }
        });

        document.getElementById("client").innerHTML = show;

    });
})();



