// Class

class Person {
  public city = 'Bogota'; // Todos tienen acceso
  protected country = 'Colombia'; // Tienen acceso mediante la herencia
  private continent = 'America'; // Solamente se tiene acceso dentro de la misma clase

  constructor() {}

  greet(): void {
    console.log('Welcome!');
  }
}

class Employee extends Person {
  // Atributos

  constructor(
    private readonly id: number, // readonly se puede consultar pero no reasignar o modificar
    private name: string,
    private depto: string
  ) {
    super();
    this.showInfo();
  }

  // Metodos
  private showInfo(): void {
    console.log(
      `${this.name} - ${this.depto} - ${this.city} - ${this.country}`
    );
  }
}

const empl = new Employee(1, 'Jean', 'Technology');
empl.greet();
