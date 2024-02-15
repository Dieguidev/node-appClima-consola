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
      access_token:
        'pk.eyJ1IjoiZGllZ3VpZGV2IiwiYSI6ImNsc243Z29rNjAxOGMyaW12dGN0NW93aWUifQ.lAdrVMV_I3K0f0zB9X8PXA',
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
