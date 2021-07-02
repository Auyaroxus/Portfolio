const express = require('express');

const router = express.Router();

const Approutes = require('../controllers/main');

//! /projects => GET
router.get("/backend", Approutes.appGet);

//! /contact => POST
router.post("/backend", Approutes.appPost);

module.exports = router;
