// Desafio 01 - Lógica de Programação
// Dev: Gabriel Hunger

// Variáveis - Escolhi randomizar o XP do herói para que a classificação seja diferente a cada execução do código
let nomeHeroi = "Juju do Pix"
let XPHeroi = Math.floor(Math.random() * 12000) + 1;
let ranque = "" 

switch (true) {
    case XPHeroi < 1001:
        ranque = "Ferro"
        break
    case XPHeroi >= 1001 && XPHeroi <= 2000:
        ranque = "Bronze"
        break
    case XPHeroi >= 2001 && XPHeroi <= 5000:
        ranque = "Prata"
        break
    case XPHeroi >= 5001 && XPHeroi <= 7000:
        ranque = "Ouro"
        break
    case XPHeroi >= 7001 && XPHeroi <= 8000:
        ranque = "Platina"
        break
    case XPHeroi >= 8001 && XPHeroi <= 9000:
        ranque = "Ascendente"
        break
    case XPHeroi >= 9001 && XPHeroi <= 10000:
        ranque = "Imortal"
        break
    case XPHeroi > 10000:
        ranque = "Radiante"
        break
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + ranque)
