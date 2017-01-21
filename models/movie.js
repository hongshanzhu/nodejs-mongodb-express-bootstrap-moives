var mongoose = require('mongoose')

var MovieSchema = require('../schemas/movie')
//Ä£ÐÍ
var Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie
