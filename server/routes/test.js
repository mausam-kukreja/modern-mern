const express = require('express');
const router = express.Router();



// import controller
const {getTest} = require('../controllers/test');

// import middlewars

// api routes

router.get('/test',getTest);

module.exports = router;