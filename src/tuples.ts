// Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.

// Las tuplas no vienen en el conjunto de tipos de datos por defecto de JavaScript.

const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 'hola', 'adios'] // un array normal tipado

prices.push(7) // agrega un elemento al array
prices.push('hola') // agrega un elemento al array

let user1: [string, number, boolean]// una tupla tipada
let user2: [string, number, boolean] = ['Andrey', 15, true] // una tupla tipada

user2 = ['John', 25, false] // una tupla tipada
// user1 = []
// user1 = ['Andrey']
// user1 = ['Andrey', 15]
user1 = ['Andrey', 15, false]

const [username, age] = user1
console.log(username, age)

// React usa tuples para definir los state con el hook useState
