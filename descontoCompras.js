const valorTotal = parseFloat(prompt('Digite o valor total da compra:'));
const formaPagamento = prompt('Digite a forma de pagamento (à vista no dinheiro, à vista no débito, à vista no crédito, a prazo no débito):').toLowerCase();
const numeroParcelas = parseInt(prompt('Digite o número de parcelas (se aplicável):')) || 1;

let valorFinal = valorTotal;
let mensagem = '';

if (formaPagamento === 'à vista no dinheiro') {
  valorFinal = valorTotal * 0.9; // Desconto de 10%
  mensagem = `Total a pagar (à vista no dinheiro): R$ ${valorFinal.toFixed(2)}`;
} else if (formaPagamento === 'à vista no débito') {
  valorFinal = valorTotal * 0.92; // Desconto de 8%
  mensagem = `Total a pagar (à vista no débito): R$ ${valorFinal.toFixed(2)}`;
} else if (formaPagamento === 'à vista no crédito') {
  valorFinal = valorTotal * 0.95; // Desconto de 5%
  mensagem = `Total a pagar (à vista no crédito): R$ ${valorFinal.toFixed(2)}`;
} else if (formaPagamento === 'a prazo no débito') {
  const valorParcelas = valorTotal / numeroParcelas;
  mensagem = `Total a pagar (a prazo no débito, ${numeroParcelas}x): R$ ${valorTotal.toFixed(2)} (${numeroParcelas} parcelas de R$ ${valorParcelas.toFixed(2)})`;
} else {
  valorFinal = valorTotal * 1.04; // Acréscimo de 4%
  const valorParcelas = valorFinal / numeroParcelas;
  mensagem = `Total a pagar (a prazo no débito, ${numeroParcelas}x): R$ ${valorFinal.toFixed(2)} (${numeroParcelas} parcelas de R$ ${valorParcelas.toFixed(2)})`;
}

console.log(mensagem);