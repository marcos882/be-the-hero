const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

routes.post('/sessions',sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents',incidentsController.index);
routes.post('/incidents',incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);

routes.get('/profile',profileController.index);

module.exports = routes;