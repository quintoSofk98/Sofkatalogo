"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient;
var arr = [];

for (let i in clientList) {
    arr.push(clientList[i]);
}

Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
    for (let j = 0; j < arr.length; j++) {
        showClient = arr[j].map(function (client) {
            return '<li>' + client.name + '</li>'
        });
        
        document.getElementById("client").innerHTML = showClient;
    }

    console.log(showClient);

}

Client.prototype.getClientsByType = (tipo) => {
    console.log('Obteniendo clientes de tipo: ' + tipo);
}

Client.prototype.getClientByName = (name) => {
    console.log('Obteniendo cliente con nombre: ' + name);
}

Client.prototype.getClientsBySector = (sector) => {
    console.log('Obteniendo clientes del sector: ' + sector);
}

let client = new Client();
client.getClients();
console.log(arr[0]);
