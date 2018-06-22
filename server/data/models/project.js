const mongoose = require('mongoose')
const { Project } = require('./schemas')

module.exports = mongoose.model('Project', Project)