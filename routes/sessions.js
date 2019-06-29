const router = require('express').Router();

const SessionsController = require('../controllers/sessionsController');

// Begin routes

router.get('/login', SessionsController.login);
router.post('/authenticate', SessionsController.authenticate);
router.post('/logout', SessionsController.logout);

// End routes

module.exports = router;