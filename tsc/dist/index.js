"use strict";
// Basic Types
let typeString = 'Hello World';
let typeNumber = 7;
let typeBoolean = true;
// Array
let arrNumbers = [1, 2, 3];
// let arrNumber2: Array<number> = [1,2,3];
let arrStrings = ['Uno', 'Dos'];
let arrAny = ['Uno', 2, false];
// Tuple
let tuplePlayers = ['Maria', 2, true];
// Tuple Array
let players;
players = [
    [1, 'Lebron'],
    [2, 'Carry'],
    [3, 'Durant'],
];
// Inferencia de Datos
let myVariable; // any cuando no se asigna el tipo de dato ni se asigna el valor
let myVariable1 = 'Hola Mundo'; // Typescript asigna el tipo de dato segun su declaración inicial
// Unions
let myVariable3;
myVariable3 = 'Hola';
myVariable3 = 3;
myVariable3 = null;
