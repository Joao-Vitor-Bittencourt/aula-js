function minhaFunction() {
//Tem seu proprio this
}

const minhaArrowFunction = () => {
    //Herda o this do escopo em foi criada.
    this.name = 'João'
};

minhaArrowFunction()

console.log(this)