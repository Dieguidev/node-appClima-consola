const axios = require('axios');

class Searches {
  history = ['Lima', 'Arequipa', 'Tacna'];

  constructor() {
    //todo: read db if exists
  }

  get paramsMapbox() {
    return {
      proximity: 'ip',
      language: 'es',
      limit: 5,
      access_token: process.env.MAPBOX_KEY,
    };
  }

  async city(place = '') {
    try {
      //todo: peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      console.log(resp.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
