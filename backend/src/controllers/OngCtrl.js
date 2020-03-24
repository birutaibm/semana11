const crypto = require('crypto');

const table = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongs = await table('ongs').select('*');
  
    return res.json(ongs);
  },

  async store(req, res) {
    const {name, email, whatsapp, city, uf} = req.body;
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    const resource = {id, name, email, whatsapp, city, uf};
    
    await table('ongs').insert(resource);
  
    return res.json(resource);
  }
};