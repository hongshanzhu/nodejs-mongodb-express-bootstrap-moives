var mongoose = require('mongoose')

var MovieSchema = require('../schemas/movie')
//ģ��
var Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie
