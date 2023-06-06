// Exemplo 02: Generics

function exibirElementos<T>(array: T[]): void {
  array.forEach((elementos) => {
    console.log(elementos);
    
  })
}

let numeros2: number[] = [1,2,3,4,5,6,7]
let paises2: string[] = ["Brasil", "EUA", "Japao", "Canada"]

exibirElementos<number>(numeros)
exibirElementos<string>(paises2)
