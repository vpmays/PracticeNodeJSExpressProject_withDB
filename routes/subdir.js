const express = require('express');
const router = express.Router();
const path = require('path');

//handle subdir index
router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'));
});

//handle subdir index
router.get('^/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'));
});

module.exports = router;