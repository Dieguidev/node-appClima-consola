const { leerInput, pausa, inquireMenu } = require('./helpers/inquirer');

const main = async () => {
  let opt;
  do {
    opt = await inquireMenu();
    switch (opt) {
      case 1:
        console.log({ opt });
        break;

      case 2:
        console.log({ opt });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt != 0);
};

main();
