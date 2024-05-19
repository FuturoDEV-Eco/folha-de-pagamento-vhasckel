const PDFDocument = require("pdfkit");
const fs = require("fs");

const gerarPDF = (name, cpf, salarioBruto, inss, ir, salarioLiquido) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("Folha_de_Pagamento.pdf"));

  doc.fontSize(16).text("Folha de Pagamento", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Nome: ${name}`);
  doc.text(`CPF: ${cpf}`);
  doc.text(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
  doc.text(`INSS: R$ ${inss}`);
  doc.text(`Imposto de renda: R$ ${ir}`);
  doc.text(`Salário líquido: R$ ${salarioLiquido}`);

  doc.end();
};

module.exports = { gerarPDF };
