const axios = require('axios');

class Searches {
  history = ['Lima', 'Arequipa', 'Tacna'];

  constructor() {
    //todo: read db if exists
  }

  get paramsMapbox() {
    return {
      // proximity: 'ip',
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

      return resp.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
