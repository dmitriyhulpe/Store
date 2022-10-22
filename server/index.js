require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { resolve } = require('path')
const path = require('path')
const absolutePath = resolve('static');

const fileUpload = require('express-fileupload')

const router = require('./routes/index')
const sequelize = require('./database')
const models = require('./models/models')
const errorHandler = require('./middlewares/errorHandlingMiddleware')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(absolutePath))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })       
    } catch (error) {
        console.log('error')
    }
}

start()