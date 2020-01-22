const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {

  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async destroy(request, response) { 

    const {github_username} = request.query;
    await Dev.findOneAndDelete({github_username});

    return response.json('Dev deletado');

  },

  async update(request, response) {

    const { github_username, techs, latitude, longitude } = request.query;

    const dev = await Dev.findOne({ github_username });
    const techsArray = parseStringAsArray(techs);
    const location = {
      type: 'Point',
      coordinates: [latitude,longitude]
    }

    if (!dev) {
      console.log('Usuario nao cadastrado')
      return response.json('Dev não encontrado');
    } else {

      console.log('Atualizando dev');

      await dev.updateOne({
        techs: techsArray,
        location
      });

      return response.json('Dev Atualizado');
    }
  },

  async store(request, response) {

    const { github_username, techs, longitude, latitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {

      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      console.log('Criando Dev...')

      const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      console.log('Dev criado')
    }
    return response.json(dev);
  }
}