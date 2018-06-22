const mongoose = require('mongoose')
const { PersonalData } = require('./schemas')

module.exports = mongoose.model('PersonalData', PersonalData)