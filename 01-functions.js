function minhaFunction() {
//Tem seu proprio this
}

const minhaArrowFunction = () => {
    //Herda o this do escopo em foi criada.
    this.name = 'João'
};

function usandoVariavelParametros() {
    console.log(arguments)
    //A variavel arguments retornar um objeto com os parametros passados na chamada da função, não importa quantos eles são
}

usandoVariavelParametros(1, 'João', true)

//Há uma outra forma de fazermos isso, através do rest operator:

function usandoRestOperator(parametro1, ...restanteParametros) {
    console.log({parametro1})
    console.log({...restanteParametros})
    //Desta forma podemos até escolher
}

usandoRestOperator(0, 1, 2, 3, 4, 5)