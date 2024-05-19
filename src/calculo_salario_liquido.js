const { calcularIR } = require("./calculo_imposto_renda");
const { calcularINSS } = require("./calculo_inss");

const calcularSalarioLiquido = (salarioBruto) => {
  let salarioLiquido = salarioBruto;

  //array com todos os descontos que forem necessários
  const descontos = [calcularINSS, calcularIR];

  //itera sobre as funções de desconto e faz a subtração do salário bruto
  for (const desconto of descontos) {
    salarioLiquido -= desconto(salarioBruto);
  }

  return salarioLiquido;
};

module.exports = { calcularSalarioLiquido };
