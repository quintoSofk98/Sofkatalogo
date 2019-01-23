"use strict";

var clientList = require('./clientObjects.js');
var Client = require('../models.js');
var arr = [];

for (let i in clientList) {
    arr.push(clientList[i]);
}

Client = function (name, id, type) {
    this.name = name;
    this.id = id;
    this.type = type;
};

Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
    var showClient = arr.map(function (client) {
        return '<li>' + client.name + '</li>'
    });
    document.getElementById("client").innerHTML = showClient;
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