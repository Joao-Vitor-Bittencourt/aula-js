const user = {
    firstName: 'João',
    lastName: 'Bittencourt',
    full_name: 'João Bittencourt',
    age: 20,
    instagrama: 'oaojoao',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

//Rest: é uma forma simples de pegarmos o resto (rest) dos valores do nosso objeto, a unica regra do rest operator é que ela precisa ser a ultima variavel.

const {firstName, skills, ...resto} = user;
const [primary, ...outrasSkills] = skills;

console.log(firstName, resto)