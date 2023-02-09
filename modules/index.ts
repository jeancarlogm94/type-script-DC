// import { Person, generateRandomNumber } from './myModules';
// import { PI as myPI } from './myModules';
import * as myCode from './myModules';

const user: myCode.Person = {
  id: 1,
  name: 'Jean',
};

console.log(myCode.PI);
console.log(user);
console.log(myCode.generateRandomNumber());
