const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  const evenNumbers = data.split('\n')
    .map(num => parseInt(num, 10))
    .filter(num => num % 2 === 0);

  console.log('Números pares encontrados:', evenNumbers.join(', '));
});
