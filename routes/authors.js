const router = require('express').Router();

const AuthorsController = require('../controllers/authorsController');

// Begin routes

router.get('/new', AuthorsController.new);
router.post('/', AuthorsController.create);

// End routes

module.exports = router;