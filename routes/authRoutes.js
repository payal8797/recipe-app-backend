const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerValidation, loginValidation, validate } = require('../utils/validator');

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post('/register', registerValidation, validate, register);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', loginValidation, validate, login);

module.exports = router;
