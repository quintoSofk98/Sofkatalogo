"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];

for (let i in clientList) {
    arr.push(clientList[i]);
}

(Client.prototype.getClients = () => {
    for (let j = 0; j < arr.length; j++) {
        showClient += arr[j].map((client) => {
            return '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
                '<img src="' + client.img + '" alt="Card image" style="width:100%">' +
                '<div class="card-body">' +
                '<h4 class="card-title">' + client.name + '</h4>' +
                '<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>' +
                '<a href="" class="btn btn-primary">Ver mas</a>' +
                '</div>' +
                '</div>'
        });
    }
    document.getElementById("client").innerHTML = showClient;
})();

Client.prototype.getClientsPerson = (type) => {
    var filterPersona = arr.filter(function (client) {
        return (client.type === "Persona")
    });
    console.log(filterPersona);
}

(Client.prototype.getAllEnterprises = () => {
    document.getElementById("enterprises").addEventListener('click', () => {
        var showEnterprise = arr[0].map((enterprise) => {
            return '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
                '<img src="' + enterprise.img + '" alt="Card image" style="width:100%">' +
                '<div class="card-body">' +
                '<h4 class="card-title" id="enterpriseName">' + enterprise.name + '</h4>' +
                '<p class="card-text">' + enterprise.sector + '</p>' +
                '<a href="" id="moreEnterprise" class="btn btn-primary">Ver mas</a>' +
                '</div>' +
                '</div>'
        });
        document.getElementById("client").innerHTML = showEnterprise;
    });
})();

(Client.prototype.getAllPersons = () => {
    document.getElementById("persons").addEventListener('click', () => {
        var showPerson = arr[1].map((person) => {
            return '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
                '<img src="' + person.img + '" alt="Card image" style="width:100%">' +
                '<div class="card-body">' +
                '<h4 class="card-title">' + person.name + '</h4>' +
                '</div>' +
                '</div>'
        });
        document.getElementById("client").innerHTML = showPerson;
    });
})();

document.getElementById("allClients").addEventListener('click', () => {
    //Debo verificar si ya estan cargados los otros archivos en la principal
    Client.prototype.getClients();
});


(Client.prototype.getClientsEnterpriseByName = () => {

    document.getElementById("searchButton").addEventListener('click', () => {
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
            document.getElementById("client").innerHTML = '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
                '<img src="' + actual.img + '" alt="Card image" style="width:100%">' +
                '<div class="card-body">' +
                '<h4 class="card-title" id="enterpriseName">' + actual.name + '</h4>' +
                '<p class="card-text">' + actual.sector + '</p>' +
                '<a href="" id="moreEnterprise" class="btn btn-primary">Ver mas</a>' +
                '</div>' +
                '</div>'
        } else {
            document.getElementById("client").innerHTML = "<h2>Cliente no encontrado</h2>";
        }

    });
})();