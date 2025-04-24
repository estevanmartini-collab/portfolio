// exemplo para teste ----
const numeros = [1, 2, 3, 4, 5];

// metodos ----
Array.prototype.meuMap = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i], i, this));
  }
  return resultado;
};

Array.prototype.meuFilter = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  return resultado;
};

Array.prototype.meuReduce = function(callback, valorInicial) {
  let acumulador = valorInicial ?? this[0];
  const inicio = valorInicial !== undefined ? 0 : 1;

  for (let i = inicio; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};


Array.prototype.meuForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.meuFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return this[i];
  }
};

// testes ----
console.log("----- Testes Básicos -----");

console.log(
  "meuMap:", 
  numeros.meuMap(n => n * 2), 
  "| Esperado: [2, 4, 6, 8, 10]"
);

console.log(
  "meuFilter:", 
  numeros.meuFilter(n => n % 2 === 0), 
  "| Esperado: [2, 4]"
);

console.log(
  "meuReduce:", 
  numeros.meuReduce((acc, num) => acc + num, 0), 
  "| Esperado: 15"
);

// comparação ----
console.log("\n----- Comparação com Métodos Nativos -----");

const testeMap = JSON.stringify(numeros.meuMap(n => n * 2)) === 
                 JSON.stringify(numeros.map(n => n * 2));

const testeFilter = JSON.stringify(numeros.meuFilter(n => n > 2)) === 
                    JSON.stringify(numeros.filter(n => n > 2));

const testeReduce = numeros.meuReduce((a, b) => a + b) === 
                    numeros.reduce((a, b) => a + b);

console.log("meuMap === map?", testeMap);
console.log("meuFilter === filter?", testeFilter);
console.log("meuReduce === reduce?", testeReduce);