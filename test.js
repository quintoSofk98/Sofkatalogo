class Project {

    name;
    status;
    description;
    startDate;
    endDate;

};

class Client {
    
    name;
    id;
    type;

};

class Enterprise extends Client{
    
    size;
    sector;

};

class Person extends Client {
    constructor(){
        super(this);
    }
};

class Sofkiano {
   
    name;
    id;
    characteristics;
    sofkaExperience;
    beforeSofkaExperience;

}

class Technology {
    
    name;
    
}

export { Project, Client, Enterprise, Person, Sofkiano}