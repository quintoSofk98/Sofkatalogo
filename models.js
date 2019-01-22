'use strict';

class Project {
    constructor(name, status, description, startDate, endDate) {
        this.name = name;
        this.status = status;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Client {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
};

module.exports = class Enterprise extends Client {
    constructor (name, nit, size, sector){
        super (name, "Empresa")
        this.nit = nit;
        this.size = size;
        this.sector = sector;
       
    }
};

module.exports = class Person extends Client {
    constructor(name, cedula) {
        super(name, "Persona")
        this.cedula = cedula;
    }
};

class Sofkiano {
    constructor(name, id, characteristics, sofkaExperience, beforeSofkaExperience) {
        this.name = name;
        this.id = id;
        this.characteristics = characteristics;
        this.sofkaExperience = sofkaExperience;
        this.beforeSofkaExperience = beforeSofkaExperience;
    }
}

class Technology {
    constructor(name) {
        this.name = name;
    }
}

//module.exports = { Person, Enterprise };