const table = require('../database/connection');

module.exports = {
  async index(req, res) {
    const {page = 1} = req.query;

    let [count] = await table('incidents').count();
    [count] = Object.values(count);

    const incidents = await table('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page-1) * 5)
      .select(['incidents.id', 'incidents.title', 'incidents.description', 'incidents.value', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
  
    res.header('X-Total-Count', count);
    return res.json(incidents);
  },

  async store(req, res) {
    const {title, description, value} = req.body;
    const ong_id = req.headers.authorization;
  
    const [id] = await table('incidents').insert({
      title, description, value, ong_id
    });
  
    return res.json({id});
  },

  async delete(req, res) {
    const {id} = req.params;
    const ong_id = req.headers.authorization;

    const incident = await table('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({error: 'Operation not permited.'});
    }

    await table('incidents').where('id', id).delete();
    return res.status(204).send();
  }
};