"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
// variable
// export const PI = 3.14;
const PI = 3.14;
exports.PI = PI;
// function
// export function generateRandomNumber(): number {
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandomNumber = generateRandomNumber;
