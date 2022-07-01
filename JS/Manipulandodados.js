/*Prototype
 *prototype-based language
 *prototype chain
 *__proto__ */
'Matheus'.__proto__
;(23.0).__proto__
'matheus'.slice()
'Matheus'.length
/*Type conversion ( typecasting) cs Type coersion
 *Alteração de um tipo de dado para outro */
//type conversion
console.log('9' + 5) //type coersion
console.log(Number('9') + 5)
//Manipulando strings e numeros
//Transformar String e Número em string
let string = '123'
console.log(Number(string))
let number = 321
console.log(string(Number))
//Manipulando strings e Numeros
//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = 'paralelepipedo'
console.log(word.lenght) //mostra quantos caracteres tem a palavra
let number = 1234
console.log(String(number).length)
//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let number = 27478376.453453
console.log(number.toFixed(2).replace('.', ','))
//transformar letras minusculas em maiusculas
let word = 'Programar é vida ! '
console.log(word.toLocaleLowerCase().toUpperCase())
//Verificar se o texto contém a palavra Vida
let phrase = 'Eu quero uma vida tranquila!'
console.log(phrase.includes('vida'))
