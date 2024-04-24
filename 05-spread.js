const user = {
    firstName: 'João',
    lastName: 'Bittencourt',
    full_name: 'João Bittencourt',
    age: 20,
    instagrama: 'oaojoao',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

//Spread: é muito usado para clonarmos um objeto

const updatedUser = {
    ...user,
    age: 21,
    skills: [...user.skills, 'Labia']
}

console.log({user})
console.log({updatedUser})