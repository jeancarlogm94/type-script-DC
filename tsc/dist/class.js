"use strict";
// Class
class Person {
    constructor() {
        this.city = 'Bogota'; // Todos tienen acceso
        this.country = 'Colombia'; // Tienen acceso mediante la herencia
        this.continent = 'America'; // Solamente se tiene acceso dentro de la misma clase
    }
    greet() {
        console.log('Hello');
    }
}
class Employee extends Person {
    // Atributos
    constructor(id, name, depto) {
        super();
        this.id = id;
        this.name = name;
        this.depto = depto;
        this.showInfo();
    }
    // Metodos
    showInfo() {
        console.log(`${this.name} - ${this.depto} - ${this.city} - ${this.country}`);
    }
}
const empl = new Employee(1, 'Jean', 'Technology');
empl.greet();
