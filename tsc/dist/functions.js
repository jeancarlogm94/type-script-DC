"use strict";
function greet(name = 'Maria') {
    console.log(`Hello, ${name.toUpperCase()}!!`);
}
greet('Jean');
greet();
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    // void cuando la funcion no retorna nada
    console.log(`latitude & longitude are: LAT ${position.lat} LONG: ${position.long}`);
}
printPosition({ lat: 3, long: 55 });
printPosition({ lat: 3, long: '445' });
printPosition({ lat: 3 });
