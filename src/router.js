const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');


router.get('/', controller.renderhomepage);

router.post('/',controller.getweather);

router.get('/about',controller.renderaboutpage);

module.exports = router;