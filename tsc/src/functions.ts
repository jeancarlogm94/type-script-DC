function greet(name: string = 'Maria'): void {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}

greet('Jean');
greet();

function getNumber(): number {
  return Math.floor(Math.random() * 100);
}

console.log(getNumber());

function printPosition(position: {
  lat: number;
  long?: number | string;
}): void {
  // void cuando la funcion no retorna nada
  console.log(
    `latitude & longitude are: LAT ${position.lat} LONG: ${position.long}`
  );
}

printPosition({ lat: 3, long: 55 });
printPosition({ lat: 3, long: '445' });
printPosition({ lat: 3 });
