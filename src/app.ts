import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import expressWinston from 'express-winston'
import Helmet from 'helmet'
import winston from 'winston'


import { APIRoute } from './routes/api'
import { ImageRoute } from './routes/image'
import { constants } from './utils/constants'

const limiter = rateLimit({
  max: 100, // limit each IP to 100 requests per windowMs
  windowMs: constants.MINUTES_15
});

class App {
  public app: express.Application
  public apiRoutes: APIRoute = new APIRoute()
  public imageRoutes: ImageRoute = new ImageRoute()

  constructor() {
    this.app = express()
    this.app.use(bodyParser.json())
    this.app.use(Helmet())
    this.app.use(limiter)
    this.app.use(cors())
    this.imageRoutes.routes(this.app)
    this.apiRoutes.routes(this.app)
    this.app.use(
      expressWinston.errorLogger({
        transports: [new winston.transports.Console()]
      })
    )
  }
}

export default new App().app
