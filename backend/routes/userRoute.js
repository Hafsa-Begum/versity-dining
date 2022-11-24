const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// router.get('/get-by-token', UserController.getUserByToken)
router.post('/login', UserController.userLogin);
router.post('/register', UserController.userRegister)

module.exports = router;