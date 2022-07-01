//Olá
/*Olá
tudo
bem */
console.log('bem vindos ao javascript')
// Crase
console.log(`matheus ${1 + 1}`)
//number
console.log(2 + 4)
//boolean
console.log(false)
//Object - dar funcionalidades,metodos,propriedades e atributos
console.log({
  name: 'matheus',
  idade: 25,
  peidar: function () {
    console.log('andar')
  }
})
//Array ( vetor)
console.log(['matheus', 25])
//Primitivo - Number,boolean,undefined STRING , symbol, big int
//Object - Array, map ,set, date , ... , function
//IR NO MDN PESQUISAR STANDARD BUILD-IN OBJECTS
// Scope e block
//VAR É GLOBAL E TAMBEM LOCAL ( FUNCIONA DENTRO E FORA.)
console.log('existe x antes do bloco?', x)
{
  var x = 0
}
//const e let são locais e só funcionam no scope que foi criado
{
  let y = 0
  console.log('>existe y antes do bloco?', y)
}
// criar nomes de variaveis maiusculas e minusculas fazem diferença
//declaration
var name
// assigment ou atribuição de valores
let name = 'matheus'
//Agrupamento de declarations
let name = 'matheus'
let age, isHuman
age = 15
isHuman = true
//multiplos argumentos na funçao
//console.log(name, age, isHuman)
//escrita de texto + variaveis
//concateamento de valores
console.log('o' + name + 'tem' + age + 'anos')
//interpolando valores com template literals or template strings
//crase
console.log(`o ${name} tem ${age} anos`)
/*OBJECTS */
const person = {
  name: 'matheus',
  age: 20,
  weight: 88.6,
  isAdmin: true
}
//imprimir na tela somente oque eu quero
console.log(
  `${person.age} anos tem um rapaz que se chama ${person.name} e ele é admin em sua empresa ${person.isAdmin} possui uma altura de ${person.weight}`
)
// Array
const animals = [
  'Lion', //0
  'Matheus', //1
  'Cat' //2
]
//acessar valores dentro do array
console.log(animals[0])
//exemplo array
const animals = ['matheus', 'cat', 'dog']
console.log(animals[2])
//exercicio
//declare uma variavel
let weight
//descubra qual tipo de dado é a variavel acima
console.log(typeof weight)
//declare uma variavel e atribua valor a cada uma delas
let name = 'matheus'
let age = 25 //interger inteiro
let stars = 10.0 //float quebrado
let isSubscribe = true
//object pratica
let student = {
  name: 'matheus',
  age: 25,
  stars: 4.5,
  weight: 55,
  isSubscribe: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)
