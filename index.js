const { leerInput, pausa, inquireMenu } = require('./helpers/inquirer');
const Searches = require('./models/searches');

const main = async () => {
  const searches = new Searches();
  let opt;
  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // mostrar mensaje
        const place = await leerInput('Ciudad:');
        await searches.city(place);
        // buscar los lugares

        // seleccionar el lugar

        // Clima

        // Mostrar resultado
        console.log('\nInformación de la ciudad\n');
        console.log('Ciudad:');
        console.log('Latitud:');
        console.log('Longitud:');
        console.log('temperatura:');
        console.log('Yemperatura mínima:');
        console.log('Yemperatura máxima:');

        break;

      case 2:
        console.log({ opt });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt != 0);
};

main();
