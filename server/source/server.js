import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import methodOverride from 'method-override'
import * as dotenv from 'dotenv'
import { inject } from './middlewares/inject.js'
import { router } from './routes/index.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({ path: path.resolve(__dirname, './config/dev.env') })

const app = express()
const PORT = process.env.PORT || 3000

// set view engine
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

// middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(errorHandler())
app.use(methodOverride())
app.use(inject)

// Routes
app.use('/', router)

app.listen(PORT)
