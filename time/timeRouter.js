const express = require('express');
const router = express.Router();

const timeController = require('./timeController')
const {
    getTime
} = timeController

router.get('/api/:date?', getTime)

module.exports = router;