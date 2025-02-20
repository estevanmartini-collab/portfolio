let i = 2
let j = 3

let igual = i == j; //false
let menor = i < j; //true
let maior = i > j; //false
let maiorIgual = i >= j; //false
let menorIgual = i <= j; //true

let teste1 = igual && maior; //false
let teste2 = menor  && menorIgual; //true
let teste3 = igual || maior; //false
let teste4 = igual || menor; //true
let teste5 = !igual; 
let teste6 = !menor;

let texto = "texto";
let vazia = "";
let numero = 2;
let zero = 0;
let booleana = false;

!texto; //false
!!texto; //true
!vazia; //true
!!vazia; //false
!zero; //true
!!zero; //false
!numero; //false
!!numero; //true
!!booleana; //false
!booleana; //true


console.log(zero || numero)

true || true // = true
true || false // = true
false || true //  = true
false || false // = false

true && true // = true
true && false // = false
false && true // = false
false && false // = false

true || (false && false) // true
(true || false) && false // false

console.log(true || (false && false))
console.log((true || false) && false)