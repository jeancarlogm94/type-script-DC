// Interfaces

interface Person {
  id: number;
  name: string;
}

interface Employee extends Person {
  dept: string;
}

interface Customer extends Person {
  country: string;
}

// const customer: Customer = {}
// const emp: Employee = {}

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
