// Interfaces

interface Persona {
  id: number;
  name: string;
}

interface Empleado extends Persona {
  dept: string;
}

interface Customer extends Persona {
  country: string;
}

// const customer: Customer = {}
// const emp: Empleado = {}

interface Animal {
  name: string;
  getDogs: () => void;
  getCats: () => void;
}

class Zoo implements Animal {
  name = 'Jorge';
  getCats(): void {}
  getDogs(): void {}
}
