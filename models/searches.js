const axios = require('axios');

class Searches {
  history = ['Lima', 'Arequipa', 'Tacna'];

  constructor() {
    //todo: read db if exists
  }

  async city(place = '') {
    try {
      //todo: peticion http
      // console.log('ciudad', place);
      const resp = await axios.get('https://reqres.in/api/users?page=2');
      console.log(resp.data.per_page);
      return [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
