let Project = function (name, status, description, startDate, endDate) {
    this.name = name;
    this.status = status;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
}


let Client = function (name, id) {
    this.name;
    this.id;
    this.type;
};

class Enterprise extends Client {

    constructor() {
        super();
        this.size;
        this.sector;
    }

};

class Person extends Client {
    constructor() {
        super(this);
    }
};

let Sofkiano = function (name, id, characteristics, sofkaExperience, beforeSofkaExperience) {
    this.name = name;
    this.id = id;
    this.characteristics = characteristics;
    this.sofkaExperience = sofkaExperience;
    this.beforeSofkaExperience = beforeSofkaExperience;
}

let Technology = function (name) {
    this.name = name;
}
