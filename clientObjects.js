"use strict";

class Client {
    constructor(name, id, type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
};

class Enterprise extends Client {
    constructor (name, id, type, size, sector){
        super (name,id,type)
        this.size = size;
        this.sector = sector;
    }
};

class Person extends Client {
    constructor() {
        super(this);
    }
};

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "860.025.900-2", "empresa", "5,500-10,000 empleados", "Alimenticio")
let proteccion = new Enterprise("Protección S. A", "800.229.739-0", "empresa", "1,001-5,000 empleados", "Servicio Financiero")
let sura = new Enterprise("Seguros Generales Suramericana S.A.", "890.903.407-9 ", "empresa", "10,001+ empleados", "Seguros")
let coordinadora = new Enterprise("COORDINADORA MERCANTIL S.A.", "890.904.713", "empresa", "1,001-5,000 empleados", "Importaciones y Exportaciones")


console.log(alpina); 

