"use strict"

const express  = require('express');
const router   = express.Router();
const mainController     = require('../controllers/MainController');
const utilsController     = require('../controllers/UtilsController');
const userController     = require('../controllers/UserController');

router.get('/home', (req, res, next) => mainController.test(req, res, next));


router.get('/users', (req, res, next) => userController.getUsers(req, res, next));
router.get('/users/:userId', (req, res, next) => userController.getUserById(req, res, next));
router.get('/users/:username', (req, res, next) => userController.getUserByUsername(req, res, next));
router.post('/users', (req, res, next) => userController.createUser(req, res, next));
router.patch('/users/:userId', (req, res, next) => userController.getUserByIdAndUpdate(req, res, next));
router.delete('/users/:userId', (req, res, next) => userController.deleteUserById(req, res, next));
router.post('/users/login', (req, res, next) => userController.login(req, res, next));
router.post('/meli/code', (req, res, next) => userController.meliCode(req, res, next));

// UTILS
router.post('/resources', (req, res, next) => utilsController.upload(req, res, next));
router.post('/receiptAfip', (req, res, next) => utilsController.createReceipt(req, res, next));
router.get('/lastBill', (req, res, next) => utilsController.getLastBillNumberForInfo(req, res, next));
router.post('/creditNoteAfip', (req, res, next) => utilsController.createCreditNote(req, res, next));
router.post('/debitNoteAfip', (req, res, next) => utilsController.createDebitNote(req, res, next));

module.exports = router;