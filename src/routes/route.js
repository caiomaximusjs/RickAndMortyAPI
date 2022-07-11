const route = require('express').Router();
const controllerCharacter = require('../controllers/ApiController');
const {
  validAll,
  idValid,
  validObjectBody,
} = require('../middlewares/middleware');

route.get('/characters', validAll, controllerCharacter.findCharacterController);
route.get(
  '/find/:id',
  idValid,
  controllerCharacter.findCharacterByIdController,
);
route.post(
  '/create',
  validObjectBody,
  controllerCharacter.createCharacterController,
);
route.put(
  '/update/:id',
  idValid,
  validObjectBody,
  controllerCharacter.updateCharacterController,
);
route.delete(
  '/delete/:id',
  idValid,
  controllerCharacter.deleteCharacterController,
);

module.exports = route;
