// Basic Types
let typeString: string = 'Hello World';
let typeNumber: number = 7;
let typeBoolean: boolean = true;

// Array
let arrNumbers: number[] = [1,2,3]
// let arrNumber2: Array<number> = [1,2,3];
let arrStrings: string[] = ['Uno', 'Dos']
let arrAny: any[] = ['Uno', 2, false]

// Tuple
let tuplePlayers: [string, number, boolean] = ['Maria', 2, true]

// Tuple Array
let players: [number, string][]

players = [
  [1, 'Lebron'],
  [2, 'Carry'],
  [3, 'Durant'],
]

// Inferencia de Datos

let myVariable; // any cuando no se asigna el tipo de dato ni se asigna el valor
let myVariable1 = 'Hola Mundo'; // Typescript asigna el tipo de dato segun su declaración inicial

// Unions

let myVariable3: string | number | null;
myVariable3 = 'Hola'
myVariable3 = 3
myVariable3 = null

