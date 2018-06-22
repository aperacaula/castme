const mongoose = require('mongoose')
const { ProfessionalData } = require('./schemas')

module.exports = mongoose.model('ProfessionalData', ProfessionalData)