"use strict";

class Client {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
};

class Enterprise extends Client {
    constructor (name, type, nit, size, sector){
        super (name, type)
        this.nit = nit;
        this.size = size;
        this.sector = sector;
       
    }
};

class Person extends Client {
    constructor(name, type, cedula) {
        super(name, type)
        this.cedula = cedula;
    }
};

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "empresa", "860.025.900-2", "5,500-10,000 empleados", "Alimenticio")
let proteccion = new Enterprise("Protección S. A", "empresa",  "800.229.739-0", "1,001-5,000 empleados", "Servicio Financiero")
let sura = new Enterprise("Seguros Generales Suramericana S.A.", "empresa", "890.903.407-9 ", "10,001+ empleados", "Seguros")
let coordinadora = new Enterprise("COORDINADORA MERCANTIL S.A.", "empresa", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")

let juan = new Person("Juan Montoya", "Persona", "1.038.435,932" )
let liza = new Person("Liza Sanchez","Persona", "42.813.784") 

let clientsCollection = [alpina, proteccion, sura, coordinadora, juan, liza];

Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
    for (let i = 0; i < clientsCollection.length; i++) {
        console.log(clientsCollection[i]);
    }
}

Client.prototype.getClientsByType = (tipo) => {
    console.log('Obteniendo clientes de tipo: ' + tipo);
}

Client.prototype.getClientByName = (name) => {
    console.log('Obteniendo cliente con nombre: '+ name);
}

Client.prototype.getClientBySector = (sector) => {
    console.log('Obteniendo clientes del sector: ' + sector);
}

let client = new Client();
client.getClients();