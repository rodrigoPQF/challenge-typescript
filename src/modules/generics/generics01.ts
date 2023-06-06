
// Exemplo 01 - Retornar numeros randomicos
function retornaNumerosRandomicos(items : number[]): number {
  let itemRandomico = Math.floor(Math.random() * items.length)
  return items[itemRandomico]
}

// Exemplo 02 - Retornar strings randomicos
function retornaStringsRandomicos(items : number[]): number {
  let itemRandomico = Math.floor(Math.random() * items.length)
  return items[itemRandomico]
}

// A lógica é a mesma então por que nao usar genericos ?
function retornaElementosRandomicos<T>(items: T[]): T {
  let itemRandomico = Math.floor(Math.random() * items.length)
  return items[itemRandomico]
}

let numeros = [1,2,3,4,5,6,7]
let paises = ["Brasil", "EUA", "Japao", "Canada"]

let numerosRandomicos = retornaElementosRandomicos<number>(numeros)
let stringsRandomicos = retornaElementosRandomicos<string>(paises)
console.log(numerosRandomicos, stringsRandomicos);

