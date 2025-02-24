//import 'dotenv/config'

const args = process.argv.splice(2)

const [valor1, operacion, valor2] = args
if(!valor1 || !valor2){
    console.error("Error: Uso: calduladora.js <valor1> operación <valor2>")
    process.exit(1)
}

const numero1 = parseFloat(valor1)
const numero2 = parseFloat(valor2)
if(isNaN(numero1) || isNaN(numero2)){
    console.error("Error: Los valores ingresados deben ser números")
    process.exit(1)
}
if (operacion === '+') {
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
} else if (operacion === '-') {
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
} else if (operacion === '*') {
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
} else if (operacion === '/') {
    if (numero2 === 0) {
        console.log("Error: No se puede dividir por cero.");
    } else {
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    }
} else {
    console.log("Error: Operación no válida. Usa +, -, * o /.");
}
