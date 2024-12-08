"use strict"

const logger      = require('../utils/logger');
const User        = require('../models/user.model');
const sendEmail = require('../utils/emails');
const utilsController = require('./UtilsController');
const self        = {};
const utils       = require('../utils/utils');
const config = require('../config');
const API_URL = config.api_url;



self.createUser = async (req, res) => {
  return res.json({msg: 'ok'})
}

module.exports = self;