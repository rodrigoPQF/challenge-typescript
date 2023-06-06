

// Exemplo 01

class Estudante<T, U>{
    private id: T;
    private nome: U;

    constructor(id : T, nome: U){

      this.id = id
      this.nome = nome
    }


    retornarValor(): void {
      console.log(`Identificação do Estudante...: ${this.id}, Nome ...: ${this.nome}`);
      
    }
}

const estudante = new Estudante<number, string>(101, "Rodrigo Pereira");
const estudanteSecundario = new Estudante<string, string>("202", "Rodrigo Pereira")

estudante.retornarValor()

estudanteSecundario.retornarValor()