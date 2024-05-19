const { calcularIR } = require("./calculo_imposto_renda");
const { calcularINSS } = require("./calculo_inss");
const { calcularSalarioLiquido } = require("./calculo_salario_liquido");

console.log(calcularINSS(2409));
console.log(calcularIR(2409));
console.log(calcularSalarioLiquido(2409));
