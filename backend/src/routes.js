const express = require('express');

const SessionController = require('./controllers/SessionCtrl');
const OngController = require('./controllers/OngCtrl');
const ProfileController = require('./controllers/ProfileCtrl');
const IncidentController = require('./controllers/IncidentCtrl');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;