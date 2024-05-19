const calcularIR = (salarioBruto) => {
  //os valores de limite, aliquota e deducao sao guardadas em variaveis para facilitar a manutenção
  const FAIXAS_IR = [
    { limite: 2112, aliquota: 0, deducao: 0 },
    { limite: 2826.65, aliquota: 7.5, deducao: 158.4 },
    { limite: 3751.05, aliquota: 15, deducao: 370.4 },
    { limite: 4664.68, aliquota: 22.5, deducao: 651.73 },
  ];

  let impostoIR = 0;

  //itera sobre todos os valores da faixa de salário, dessa vez considerando a dedução
  for (let i = 0; i < FAIXAS_IR.length; i++) {
    const faixa = FAIXAS_IR[i];
    if (salarioBruto <= faixa.limite) {
      impostoIR = salarioBruto * (faixa.aliquota / 100) - faixa.deducao;
      break;
    }
  }

  //se exceder o limite da ultima faixa de salario, ira aplicar a aliquota e deducao da ultima faixa
  if (salarioBruto > FAIXAS_IR[FAIXAS_IR.length - 1].limite) {
    const ultimaFaixa = FAIXAS_IR[FAIXAS_IR.length - 1];
    impostoIR =
      salarioBruto * (ultimaFaixa.aliquota / 100) - ultimaFaixa.deducao;
  }
  6;

  //verificação para que o imposto nao seja retornado negativo
  if (impostoIR < 0) {
    impostoIR = 0;
  }

  return impostoIR;
};

module.exports = { calcularIR };
