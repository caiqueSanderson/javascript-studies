const escolhaUsuario = prompt("Escolha entre Pedra, Papel ou Tesoura");
const escolhaComputador = ["pedra", "papel", "tesoura"];
const numeroAleatorio = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
const escolhaMaquina = escolhaComputador[numeroAleatorio];

console.log("Escolha usuário: "+escolhaUsuario +"\nEscolha da máquina: "+escolhaMaquina);


if (escolhaUsuario === escolhaMaquina) {
  alert("Houve um empate!");
} 
else if (escolhaMaquina === "pedra") {
  if (escolhaUsuario === "papel"){
    alert("Você ganhou! O computador escolheu pedra");
  }
 else {
  alert("Perdeu");
}
}
else if (escolhaMaquina === "papel") {
  if (escolhaUsuario === "pedra"){
    alert("Você perdeu! O computador escolheu papel");
  }
  else {
    alert("Ganhouu, o computador jogou papel");
  }
}
else {
  if (escolhaUsuario === "pedra") {
    alert("Você ganhou, o computador escolheu tesoura");
  } else {
    alert("Perdeu, o computador escolheu tesoura");
  }
}