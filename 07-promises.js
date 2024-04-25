const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    // reject('Erro!');
  }, 2000);
});

/** then e Catch */
// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => { 
//     console.log(erro);
//   });
  

/** async e await */
async function run() {  
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}

run();