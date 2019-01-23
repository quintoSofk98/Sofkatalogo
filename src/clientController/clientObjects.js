"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "860.025.900-2", "5,500-10,000 empleados", "Alimenticio", "../imgs/clients/alpina.jpg")
let proteccion = new Enterprise("Protección S. A", "800.229.739-0", "1,001-5,000 empleados", "Servicio Financiero", "../imgs/clients/tecnoquimicas.jpg")
let sura = new Enterprise("Seguros Generales Suramericana S.A.", "890.903.407-9 ", "10,001+ empleados", "Seguros", "")
let coordinadora = new Enterprise("COORDINADORA MERCANTIL S.A.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones", "")

let juan = new Person("Juan Montoya", "1.038.435,932", "")
let liza = new Person("Liza Sanchez", "42.813.784", "")
let roxana = new Person("Roxana Gonzalez", "1.020.456.846", "");
let martha = new Person("Martha Arévalo", "37.080.664", "");
let gustavo = new Person("Gustavo Gómez", "1.100.950.935", "");
let diego = new Person("Diego Barco", "1.053.773.244", "");
let luisa = new Person("Diego Barco", "1.036.389.136", "");

let clientsCollection = {
    enterprises: [alpina, proteccion, sura, coordinadora],
    persons: [juan, liza, roxana, martha, gustavo, diego, luisa]
}

module.exports = clientsCollection;