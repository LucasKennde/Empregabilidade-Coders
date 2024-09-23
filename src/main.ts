import Calculator from './modules/calculadora.ts';

// Inicializando a calculadora com valor inicial 10
const calc = new Calculator(10);

console.log(`Valor inicial: ${calc.getCurrentValue()}`);
console.log(`Adição: 10 + 5 = ${calc.adicionar(5)}`);
console.log(`Subtração: 15 - 3 = ${calc.subtrair(3)}`);
console.log(`Multiplicação: 12 * 2 = ${calc.multiplicar(2)}`);
console.log(`Divisão: 24 / 4 = ${calc.dividir(4)}`);
console.log(`Valor atual: ${calc.getCurrentValue()}`);

// Resetar o valor
calc.reset();
console.log(`Valor após reset: ${calc.getCurrentValue()}`);
