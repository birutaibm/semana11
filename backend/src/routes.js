const express = require('express');

const OngsController = require('./controllers/OngCtrl');

const routes = express.Router();

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

module.exports = routes;