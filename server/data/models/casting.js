const mongoose = require('mongoose')
const { Casting } = require('./schemas')

module.exports = mongoose.model('Casting', Casting)