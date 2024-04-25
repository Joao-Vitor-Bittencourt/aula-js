const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript']

// .includes -> verifica se existe algo que procuramos em uma string ou se existe em um array 
const includesString = tech.includes('ode');
const includesArray = array.includes('Node.j');
// console.log({includesString}, {includesArray});

// startsWith -> Verifica se uma string começa com alguma sequência de caracteres 
const startsWith = tech.startsWith('No');
// console.log({startsWith});

// endsWith -> Verifica se uma string termina com alguma sequência de caracteres
const endsWith = tech.endsWith('aa');
console.log({endsWith});