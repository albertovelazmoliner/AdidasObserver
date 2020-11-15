import bodyParser from 'body-parser'
import express from 'express'
import Helmet from 'helmet'

import { APIRoute } from '../src/routes/api'
import { ImageRoute } from '../src/routes/image'

class App {
  public app: express.Application
  public apiRoutes: APIRoute = new APIRoute()
  public imageRoutes: ImageRoute = new ImageRoute()  

  constructor() {
    this.app = express() 
    this.app.use(bodyParser.json())
    this.app.use(Helmet())
    this.imageRoutes.routes(this.app)
    this.apiRoutes.routes(this.app)
  }
}

export default new App().app
