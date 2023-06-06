
// ==> Exemplo 01 - Uso de Colchetes:
let frutas: string[] = ['abacaxi', 'laranja', 'maça', 'melancia', 'manga']
console.log(frutas[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):

let frutas1: Array<string> = ['abacaxi', 'laranja', 'maça', 'melancia', 'manga']
console.log(frutas[2]);

// ==> Exemplo 03 - Adicionando mais strings com o método 'push'

let idiomas: Array<string> = ['Portugues', 'Ingles', 'Frances']
console.log(idiomas);
idiomas.push('Mandarin')
console.log(idiomas);

// ==> Exemplo 04 - Identificar tamanho do array - metodo 'length'
let idiomas1: Array<string> = ['Portugues', 'Ingles', 'Frances']
console.log(idiomas.length);

// ==> Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8]

console.log(listaNumeros);

// ==> Exemplo 05 - Exemplo de Array com laço de iteração

let linguagensArray: string[] = new Array('Javascript', 'Python', 'PHP')
function funcaoLinguagens(linguages: string[]){
  for (let i = 0; i < linguages.length; i++) {
    const element = linguagensArray[i];
    console.log(element)
    
  }
}
