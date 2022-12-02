const router = require('express').Router();
const userRoutes = require('./user-routes');
const express = require('express');
const app = express();
router.use('/users', userRoutes);


module.exports = router;
