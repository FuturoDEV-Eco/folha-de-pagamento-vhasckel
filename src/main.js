const { calcularIR } = require("./calculo_imposto_renda");
const { calcularINSS } = require("./calculo_inss");
const { calcularSalarioLiquido } = require("./calculo_salario_liquido");

// console.log(calcularINSS(2409));
// console.log(calcularIR(2409));
// console.log(calcularSalarioLiquido(2409));

const readline = require("readline");

const formatarCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const retornaFolhaPagamento = () => {
  const input = readline.createInterface(process.stdin, process.stdout);

  input.question("Digite o nome do funcionário: ", (name) => {
    input.question("Digite o CPF: ", (cpf) => {
      input.question("Salário bruto: ", (salarioBruto) => {
        salarioBruto = parseFloat(salarioBruto);

        const inss = calcularINSS(salarioBruto).toFixed(2);
        const ir = calcularIR(salarioBruto).toFixed(2);
        const salarioLiquido = calcularSalarioLiquido(salarioBruto).toFixed(2);
        const cpfFormatado = formatarCPF(cpf);

        console.log("\n--- Folha de Pagamento ---");
        console.log(`Nome: ${name}`);
        console.log(`CPF: ${cpfFormatado}`);
        console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
        console.log(`INSS: R$ ${inss}`);
        console.log(`Imposto de renda: R$ ${ir}`);
        console.log(`Salário líquido: R$ ${salarioLiquido}`);

        input.close();
      });
    });
  });
};

retornaFolhaPagamento();
