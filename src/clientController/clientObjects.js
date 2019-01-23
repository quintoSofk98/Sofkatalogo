"use strict";

var { Enterprise, Person } = require('../models.js');

let alpina = new Enterprise("Alpina Productos Alimenticios S.A.", "860.025.900-2", "5,500-10,000 empleados", "Producción de alimentos", "../imgs/clients/alpina.jpg")
let proteccion = new Enterprise("Protección S.A.", "800.229.739-0", "1,001-5,000 empleados", "Servicios Financiero", "../imgs/clients/proteccion.jpg")
let sura = new Enterprise("SURA S.A.", "900.847.380 ", "51-200 employees", "Servicios Financieroos", "../imgs/clients/sura.png")
let coordinadora = new Enterprise("Coordinadora Mercantil S.A.", "890.904.713", "1,001-5,000 empleados", "Importaciones y Exportaciones", "../imgs/clients/coordinadora.png")
let alfaPeople = new Enterprise("AlfaPeople Andino S.A.", "830.013.988-9", "1,001-5,000 empleados", "Tecnología de la Información y servicios", "../imgs/clients/alfapeople.png" )
let amadeus = new Enterprise("Amadeus.", "800-159-527", "1,001-5,000 empleados", "Tecnología de la Información y servicios", "../imgs/clients/amadeus.png")
let exito = new Enterprise("Almacenes Exito S.A.", "890.900.608-9", "10,001+ empleados", "Comercio", "../imgs/clients/exito.png")
let infocorp = new Enterprise("Infocorp Tecnología", "No Aplica", "51-200 empleados", "Tecnología de la Información y servicios", "../imgs/clients/infocorp.png")
let iteriaUS = new Enterprise("iteriaUS", "No Aplica", "51-200 empleados", "Tecnología de la Información y servicios", "../imgs/clients/iteriaUS.jpg")
let metroM = new Enterprise("Metro de Medellín Ltda", "890.923.668-1", "51-200 empleados", "Transporte", "../imgs/clients/metroM.png")
let sas = new Enterprise("SAS", "No Aplica", "10,001+ empleados", "Tecnología de la Información y servicios", "../imgs/clients/sas.png")
let tecnoquimicas = new Enterprise("Tecnoquimicas S.A.", "890.300.466", "5,001-10,000 empleados", "Farmacéutico", "../imgs/clients/tecnoquimicas.jpg")
let teleperformance = new Enterprise("Teleperformance Colombia S.A.S", "900.323.853-7", "10,001+ empleados", "Telecomonicación", "../imgs/clients/teleperformance.png")

let juan = new Person("Juan Montoya", "1.038.435,932", "../imgs/clients/personaHombre.png")
let liza = new Person("Liza Sanchez", "42.813.784", "../imgs/clients/personaMujer.png")
let roxana = new Person("Roxana Gonzalez", "1.020.456.846", "../imgs/clients/personaMujer.png");
let martha = new Person("Martha Arévalo", "37.080.664", "../imgs/clients/personaMujer.png");
let gustavo = new Person("Gustavo Gómez", "1.100.950.935", "../imgs/clients/personaHombre.png");
let diego = new Person("Diego Barco", "1.053.773.244", "../imgs/clients/personaHombre.png");
let luisa = new Person("Diego Barco", "1.036.389.136", "../imgs/clients/personaMujer.png");

let clientsCollection = {
    enterprises: [alpina, proteccion, sura, coordinadora, alfaPeople, amadeus, exito, infocorp, iteriaUS, metroM, sas, tecnoquimicas, teleperformance ],
    persons: [juan, liza, roxana, martha, gustavo, diego, luisa]
}

module.exports = clientsCollection;