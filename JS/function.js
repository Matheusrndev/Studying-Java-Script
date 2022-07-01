//declaration - declaração da função
//function statement

function createPhrases() {
  console.log('Aula sobre functions')
  console.log('A linda vida')
  console.log('alo alo ')
}
//executar a  função ( execute, run, call, invoke)
createPhrases()
createPhrases()
console.log('fim do programa')
// function expression
//function anonymous
//parameters ( parametros)
const sum = function (number1, number2) {
  console.log(number1 + number2)
}

sum(2, 3) //arguments de uma funçao executada
sum(4, 5) // SUM = SOMA
sum(56, 435353)

// function expression
//function anonymous
//parameters ( parametros)
//soma 
const subtraction = function (number1, number2) {
  total = number1 - number2
  return total //palavra chave
}

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)console.log(`o numero 2 é ${number2}`)
console.log(`a subtração é ${subtraction(number1, number2)}`)
//quando colocamos o console total, tbm da
console.log(total)
//uma função é um liqudiifcador
//batedeira é a função
function fazersuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}
//é como se fosse uma caixa magica que vai receber e ela vai te retornar a junção
const copo = fazersuco('banana', 'maçã')
console.log(copo)
//function scope em prática
let subject = 'create video'
function createThink() {
  subject = 'study'
  return subject
}
console.log(subject)
console.log(createThink(subject))

//hoisting
sayMyName()

function sayMyName() {
  console.log('Matheus')
}