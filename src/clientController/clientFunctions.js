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
            return '<img src="' + client.img + '" title="' + "img" + '" alt="' + "im" + '" />';
        });
    }

    document.getElementById("client").innerHTML = showClient;

}

Client.prototype.getClientsPerson = (name) => {


}


Client.prototype.getClientsEnterprise = () => {

    document.getElementById("searchButton").addEventListener('click', () => {
        console.log('Obteniendo clientes de tipo: ');
        let cliSearched = document.getElementById("clientToSearch").value;
        var show = arr[0].map( (client) => {
            if (client.name === cliSearched) {
                return '<img src="' + client.img + '" title="' + "img" + '" alt="' + "img" + '" />';
            }else{
                return '<h3>El cliente no fue encontrado<H3/>';
            }
        });

        document.getElementById("client").innerHTML = show;

    });
}

let client = new Client();
client.getClients();
client.getClientsEnterprise();

