"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];

for (let i in clientList) {
    arr.push(clientList[i]);
}

(Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
    for (let j = 0; j < arr.length; j++) {
        showClient += arr[j].map((client) => {
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

(Client.prototype.getAllEnterprises = () => {
    document.getElementById("enterprises").addEventListener('click', () => {
        document.getElementById("client").innerHTML = "Mostrando solo las empresas";
    });
})();

(Client.prototype.getAllPersons = () => {
    document.getElementById("persons").addEventListener('click', () => {
        document.getElementById("client").innerHTML = "Mostrando solo las personas asociadas";
    });
})();

document.getElementById("allClients").addEventListener('click', () => {
    
    //Debo verificar si ya estan cargados los otros archivos en la principal
        Client.prototype.getClients();
    

});

(Client.prototype.getClientsEnterpriseByName = () => {

    document.getElementById("searchButton").addEventListener('click', () => {
        console.log('Obteniendo clientes de tipo: ');
        let cliSearched = document.getElementById("clientToSearch").value;
        let foundCliente;
        let actual;

        var show = arr[0].map((client) => {
            foundCliente = client.name === cliSearched.toUpperCase();
            if (foundCliente) {
                actual = client;
            }
        });

        if (actual !== undefined) {
            document.getElementById("client").innerHTML = '<img src="' + actual.img + '" style = width: 20px"' + '" title="' + "img" + '" alt="' + "img" + '" />'
        } else {
            document.getElementById("client").innerHTML = "Cliente no encontrado";
            console.log(actual);

        }

    });
})();



