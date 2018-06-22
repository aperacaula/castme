const mongoose = require('mongoose')
const { PhysicalData } = require('./schemas')

module.exports = mongoose.model('PhysicalData', PhysicalData)