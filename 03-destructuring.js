const user = {
    firstName: 'João',
    lastName: 'Bittencourt',
    full_name: 'João Bittencourt',
    age: 20,
    instagrama: 'oaojoao',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

//Destructuring: é uma forma mais facil de acessar uma propriedade ou valor dentro de um objeto ou array

const {firstName, lastName, full_name: fullName, skills} = user;
const [index0, index1, index2, index3] = skills;

console.log(firstName, lastName, fullName)