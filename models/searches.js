class Searches {
  history = ['Lima', 'Arequipa', 'Tacna'];

  constructor() {
    //todo: read db if exists
  }

  async city(place = '') {
    //todo: peticion http
    console.log(place);

    return []; // retorna los lugares
  }
}

module.exports = Searches;
