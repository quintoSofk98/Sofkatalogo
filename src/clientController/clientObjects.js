"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "860.025.900-2", "5,500-10,000 empleados", "Alimenticio")
let proteccion = new Enterprise("Protección S. A", "800.229.739-0", "1,001-5,000 empleados", "Servicio Financiero")
let sura = new Enterprise("Seguros Generales Suramericana S.A.", "890.903.407-9 ", "10,001+ empleados", "Seguros")
let coordinadora = new Enterprise("COORDINADORA MERCANTIL S.A.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")

let juan = new Person("Juan Montoya", "1.038.435,932")
let liza = new Person("Liza Sanchez", "42.813.784")

let clientsCollection = { alpina, proteccion, sura, coordinadora, juan, liza };


module.exports = JSON.parse(clientsCollection);