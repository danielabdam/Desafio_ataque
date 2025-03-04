function ranked(vitoria, derrota) {
    return vitoria - derrota
}

let saldoVitorias = ranked(1000, 20)
let nivel = ""

if (saldoVitorias <= 10) {
    nivel = "Ferro"
} else if (saldoVitorias <= 20) { 
    nivel = "Bronze"
} else if (saldoVitorias <= 50) { 
    nivel = "Prata"
} else if (saldoVitorias <= 70) { 
    nivel = "Ouro"
} else if (saldoVitorias <= 80) { 
    nivel = "Platina"
} else if (saldoVitorias <= 90) { 
    nivel = "Ascendente"
} else if (saldoVitorias <= 100) { 
    nivel = "Imortal"
} else { 
    nivel = "Radiante"
}
console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de " + nivel)
