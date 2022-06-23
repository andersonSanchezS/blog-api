/* eslint-disable import/first */
/* eslint-disable no-console */
// Express Imports
import express from 'express'
import { join } from 'path'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import 'module-alias/register'

dotenv.config()

// Environment variables
import { REST_PORT, API_VERSION, ENVIRONMENT } from './env'

// Database Connection
import '@db/db'

// Rest Api Routes
import router from '@rest/index'

// Errors
import ErrorHandler from '@utils/ErrorHandler'
import HttpException from '@errors/HttpException'

// Express middlewares
const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(helmet())

// Get the api logs
if (ENVIRONMENT() === 'development') {
    app.use(morgan('dev'))
}

// Api routes
app.use('/', express.static(join(__dirname, '../public')))
app.use(`/api/v${API_VERSION()}`, router)

// Handle unknown routes
app.all('*', (req, res, next) => {
    next(
        new HttpException(
            `no se encuentra la ruta ${req.originalUrl} en el servidor`,
            404
        )
    )
})

// Error handler
app.use(ErrorHandler)

app.listen(REST_PORT(), () => {
    console.log(`Rest server started at port ${REST_PORT()}`)
})
