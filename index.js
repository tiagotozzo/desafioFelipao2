//Desafio do Felipão 2 / Feito por Tiago Tozzo

//Declaração de variáveis
let nivel = ""
let resultado = saldo(113 , 57)

//Função para retornar o saldo de vitórias, recebendo como parâmetros a quantidade de vitórias e de derrotas
function saldo(quantidadeVitorias , quantidadeDerrotas){
    return quantidadeVitorias - quantidadeDerrotas
}

//Usando else if para encontrar o nível do jogador
if (resultado <= 10){
    nivel = "Ferro"
}

else if ((resultado > 10) && (resultado <= 20)){
    nivel = "Bronze"
}

else if ((resultado > 20) && (resultado <= 50)){
    nivel = "Prata"
}

else if ((resultado > 50) && (resultado <= 80)){
    nivel = "Ouro"
}

else if ((resultado > 80) && (resultado <= 90)){
    nivel = "Diamante"
}

else if ((resultado > 90) && (resultado <= 100)){
    nivel = "Lendário"
}

else if (resultado > 100){
    nivel = "Imortal"
}

//Saida de dados para o usuário
console.log("O herói tem o saldo de: " + resultado + " e está no nível: " + nivel) 

