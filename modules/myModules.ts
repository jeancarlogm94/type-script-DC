// variable
// export const PI = 3.14;
const PI = 3.14;

// interface
// export interface Person {
interface Person {
  id: number;
  name: string;
}

// function
// export function generateRandomNumber(): number {
function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

export { PI, Person, generateRandomNumber };
