const escolha = prompt("Escolha entre par ou impar");
const numeroSorteado = Math.round(Math.random() * 100 + 1);

console.log(escolha);
console.log(numeroSorteado);

const par = numeroSorteado % 2 === 0;

if (escolha == "par"){
  alert(numeroSorteado);
  if (par){
    alert("Ganhou")
  }else{
    alert("Perdeu")
  }
}
else if(escolha == "ímpar"){
  alert(numeroSorteado);
  if(par){
    alert("Perdeu")
  }else{
    alert("Ganhou")
  }
}else{
  alert("Você não digitou corretamente")
}