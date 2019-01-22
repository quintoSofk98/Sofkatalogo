Client = function (name, id, type) {
    this.name = name;
    this.id = id;
    this.type = type;
};

Client.prototype.getClients = () => {
    console.log('Obteniendo listado de clientes');
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
