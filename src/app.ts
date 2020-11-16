import bodyParser from 'body-parser'
import express from 'express'
import RateLimit from 'express-rate-limit'
import Helmet from 'helmet'

import { APIRoute } from './routes/api'
import { ImageRoute } from './routes/image'
import { constants } from './utils/constants'

const limiter = RateLimit({
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
    this.imageRoutes.routes(this.app)
    this.apiRoutes.routes(this.app)
  }
}

export default new App().app
