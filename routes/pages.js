const router = require('express').Router();

// Our controllers
const PagesController = require('../controllers/pagesController');

// Create our routes
router.get(`/`, PagesController.show);

router.get(`/Home`, PagesController.show);
router.get(`/About`, PagesController.show);
router.get(`/Contact`, PagesController.show);


module.exports = router;