require('dotenv').config();

const {
  leerInput,
  pausa,
  inquireMenu,
  listPlaces,
} = require('./helpers/inquirer');
const Searches = require('./models/searches');

const main = async () => {
  const searches = new Searches();
  let opt;
  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // mostrar mensaje
        const searchedPlace = await leerInput('Ciudad:');

        // buscar los lugares
        const places = await searches.city(searchedPlace);
        // console.log({ places });

        // seleccionar el lugar
        const id = await listPlaces(places);

        selectedPlace = places.find((pl) => pl.id === id);
        // console.log({ selectedPlace });

        // Clima

        // Mostrar resultado
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', selectedPlace.name);
        console.log('Latitud:', selectedPlace.lat);
        console.log('Longitud:', selectedPlace.lng);
        console.log('Temperatura:');
        console.log('Temperatura mínima:');
        console.log('Temperatura máxima:');

        break;

      case 2:
        console.log({ opt });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt != 0);
};

main();
