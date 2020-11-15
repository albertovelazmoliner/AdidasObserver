import { Application } from 'express'
import { ImageDataController } from '../controllers/nasaImageData'

export class ImageRoute {
  public routes(app: Application): void {
    app.route('/image').get(ImageDataController.getNasaImage)
  }
}