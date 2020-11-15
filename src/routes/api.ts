import { Application } from 'express'
import apiController from '../controllers/api'

export class APIRoute {
  public routes(app: Application): void {
    app.route('/api').get(apiController.getApi)
  }
}