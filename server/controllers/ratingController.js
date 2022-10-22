const jwt = require('jsonwebtoken')

const { Rating, User, Device } = require('../models/models')
const ApiError = require('../error/ApiError')

class RatingController {

    async set(req, res, next) {
        
    }

    async check(req, res, next) {

    }
}

module.exports = new RatingController()