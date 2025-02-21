const fs = require('fs');

const numbers = Array.from({ length: 1000 }, (_, i) => i + 1).join('\n');

fs.writeFile('numeros.txt', numbers, (error) => {
  if (error) {
    console.error('Error al escribir el archivo:', error);
    return;
  }
  console.log('Archivo numeros.txt generado correctamente.');
});
