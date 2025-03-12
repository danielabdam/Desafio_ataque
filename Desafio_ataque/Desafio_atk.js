class heroi{
    constructor(nome, idade, tipo ){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    tipoAtacar(){
        let ataque;

        if (this.tipo == "mago" ) {
            ataque = "magia"
        } else if (this.tipo == "guerreiro ") { 
            ataque  = "espada"
        } else if (this.tipo == "monge ") { 
            ataque  = "marciais"
        } else if (this.tipo == "ninja ") { 
            ataque  = "shuriken" }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
        
    }

}

let heroig = new heroi("Vanesa", 21, "guerreiro");
let heroim = new heroi("Daniel", 26, "mago");

heroig.tipoAtacar()
heroim.tipoAtacar()
