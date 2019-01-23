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
        showClient += arr[j].map(function (client) {
            return '<img src="'+client.img+'" title="'+"img"+'" alt="'+"im"+'" />';
        });
    }

    document.getElementById("client").innerHTML = showClient;
    console.log(showClient);
    
}

Client.prototype.getClientsPerson = (type) => {
    console.log('Obteniendo clientes de tipo: ' + type);
}


Client.prototype.getClientsEnterprise = (name) => {

}

let client = new Client();
client.getClients();

