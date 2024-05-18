const calcularINSS = (salarioBruto) => {
  const TETO_INSS = 908.86;

  //os limites de salario bruto e aliquotas são guardadas em variaveis para facilitar a manutenção. nesse caso, um array de objetos.
  const FAIXAS_SALARIO = [
    { limite: 1412, aliquota: 7.5 },
    { limite: 2666.68, aliquota: 9 },
    { limite: 4000.03, aliquota: 12 },
    { limite: 7786.02, aliquota: 14 },
  ];
  let inss = 0;

  //o laço for faz o calculo do inss iterando sobre as faixas de salario
  for (let i = 0; i < FAIXAS_SALARIO.length; i++) {
    const faixa = FAIXAS_SALARIO[i];
    if (salarioBruto <= faixa.limite) {
      inss = salarioBruto * (faixa.aliquota / 100);
      break;
    }
  }

  //se o salario bruto nao corresponder a nenhuma das faixas do array FAIXAS_SALARIO, o valor da variaval inss vai continuar sendo 0, o que siginifica que o salário bruto é maior que o maior limite definido, portanto, o valor do inss será definido como sendo o teto do inss
  if (inss === 0) {
    inss = TETO_INSS;
  }

  //se inss for menor que o teto_inss ele será retornado normalmente, se for maior, teto_inss sera retornado
  return Math.min(inss, TETO_INSS);
};

module.exports = { calcularINSS };
