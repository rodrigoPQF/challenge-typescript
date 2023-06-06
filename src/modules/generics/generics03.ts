
interface Pessoa {
  nome: string
  idade: number
}
function obetrPessoaIdadeMaioQue<T extends Pessoa>(pessoas: T[], idade: number): T[]{
  return pessoas.filter(pessoa => pessoa.idade > idade)
}

const pessoas: Pessoa[] = [
  { nome: 'Lucas', idade: 20},
  { nome: 'Jair', idade: 40},
  { nome: 'Sonia', idade: 23},
  { nome: 'Valdineia', idade: 10},
  { nome: 'Bazilio', idade: 15}
]

const pessoascomIdadeMaiorQue24 = obetrPessoaIdadeMaioQue(pessoas, 24)


// Exemplo 02 - Generics Constraints

function juntarObj<U, V>(obje1: U, obje2: V){
  return {
    ...obje1,
    ...obje2
  }
}
const pessoa = juntarObj({ nome: 'Glauc',}, 36)
// Isso vai da erro
console.log(pessoa);



function juntarObj2<U extends object, V extends object>(obje1: U, obje2: V){
  return {
    ...obje1,
    ...obje2
  }
}

// Agora vai passar
const pessoa2 = juntarObj2({ nome: 'Glauc'}, { idade: 42})
console.log(pessoa2);



// Exemplo 03 - Type parameter in generic constraints

function prop<T, K extends keyof T>(objeto: T, chave: K){
  return objeto[chave]
}

const pessoaas4 = prop({ nome: 'Rodrigo'}, 'nome')
console.log(pessoaas4);
