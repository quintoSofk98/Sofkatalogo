"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "860.025.900-2", "5,500-10,000 empleados", "Producción de alimentos")
let proteccion = new Enterprise("Protección S.A.", "800.229.739-0", "1,001-5,000 empleados", "Servicios Financiero")
let sura = new Enterprise("SURA S.A.", "900.847.380 ", "51-200 employees", "Servicios Financieroos")
let coordinadora = new Enterprise("Coordinadora Mercantil S.A.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let alfaPeople = new Enterprise("AlfaPeople Andino S.A.", "830.013.988-9", "1,001-5,000 empleados", "Tecnología de la Información")
let amadeus = new Enterprise("Amadeus.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let exito = new Enterprise("Exito", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let infocorp = new Enterprise("infocorp", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let iteriaUS = new Enterprise("iteriaUS", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let metroM = new Enterprise("Metro Medellín", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let sas = new Enterprise("sas", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let tecnoquimicas = new Enterprise("Tecnoquimicas", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")
let teleperformance = new Enterprise("COORDINADORA MERCANTIL S.A.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones")

 

let juan = new Person("Juan Montoya", "1.038.435,932", "")
let liza = new Person("Liza Sanchez", "42.813.784", "")
let roxana = new Person("Roxana Gonzalez", "1.020.456.846", "");
let martha = new Person("Martha Arévalo", "37.080.664", "");
let gustavo = new Person("Gustavo Gómez", "1.100.950.935", "");
let diego = new Person("Diego Barco", "1.053.773.244", "");
let luisa = new Person("Diego Barco", "1.036.389.136", "");

let clientsCollection = {
    enterprises: [alpina, proteccion, sura, coordinadora, alfaPeople],
    persons: [juan, liza, roxana, martha, gustavo, diego, luisa]
}

module.exports = clientsCollection;