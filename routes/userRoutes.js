const express = require('express');
const { register, regiserValidations, login, loginValidations } = require('../controllers/userController');
const router = express.Router();

router.post('/register', regiserValidations, register);
router.post('/login', loginValidations, login)

module.exports = router