const fs = require('fs');
const axios = require('axios');

class Searches {
  history = [];
  dbPath = './db/database.json';

  constructor() {
    //read db if exists
    this.readDB();
  }

  get historyCapitalize() {
    return this.history.map((place) => {
      let words = place.split(' ');
      words = words.map((word) => word[0].toUpperCase() + word.substring(1));

      return words.join(' ');
    });
  }

  get paramsMapbox() {
    return {
      // proximity: 'ip',
      language: 'es',
      limit: 5,
      access_token: process.env.MAPBOX_KEY,
    };
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: 'metric',
      lang: 'es',
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

  async placeWeather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: { ...this.paramsWeather, lat, lon },
      });

      const resp = await instance.get();
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  addHistory(place = '') {
    //prevenir duplicados
    if (this.history.includes(place.toLocaleLowerCase())) {
      return;
    }

    this.history = this.history.splice(0, 5); //limite de historial 5 elementos

    this.history.unshift(place.toLocaleLowerCase());
    //todo: grabar en db
    this.saveDB();
  }

  saveDB() {
    const payload = {
      history: this.history,
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    return;
  }
  readDB() {
    //prevenir errores
    if (!fs.existsSync(this.dbPath)) return;

    //si existe leer el archivo y guardarlo en history
    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    this.history = data.history;
  }
}

module.exports = Searches;
