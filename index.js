const { leerInput } = require('./helpers/inquirer');

const main = async () => {
  const texto = await leerInput('Escribe un texto:');
  console.log(texto);
};

main();
