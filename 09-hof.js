
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 },
];

// .find -> retorna o primeiro em que a nossa condição retorna true
const find = array.find((product) => product.name = 'iPhone');
console.log({ find });

// .findIndex -> retorna em qual posição do nosso array o elemento está quando a nossa condição retorna true
const findIndex = array.findIndex((product) => product.name ===  'Magic Mouse');
console.log({ findIndex });

// .some -> verifica se ALGUM elemento do nosso cumpre a regra 
const some = array.some((product) => product.price < 1000);
console.log({ some });

// .every -> verifica se TODOS os elementos cumprem a regra
const every = array.every((product) => product.price >= 1000);
console.log({ every });

// .map -> percorre o array e executa algo em cima de cada elemento percorrido criando um NOVO array com o mesmo número de posições
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}));
console.log({ map });

// .filter -> filtra os elementos do nosso array que atendem a uma condição definida
const filter = array.filter((product) => product.quantity > 1);
console.log({ filter });

// .reduce -> valor inicial que acumula (accumulator) ao retorno de cada elemento do array
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.quantity * product.price);
}, 0);
console.log({ reduce });
