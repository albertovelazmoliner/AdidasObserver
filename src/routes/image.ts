import { Application } from 'express'
import { query } from 'express-validator'
import { ImageDataController } from '../controllers/nasaImageData'

export class ImageRoute {
  public routes(app: Application): void {    
    app.get('/image', [
      query('api_key').exists().withMessage('api_key is required'),
      query('api_key').equals(process.env.NASA_API_KEY!).withMessage('api_key is not a valid value'),
      query('addressParams').exists().withMessage('addressParams is required'),
      query('addressParams').isString().withMessage('addressParams is not a valid value'),
      query('addressParams').isLength({ min: 6 }).withMessage('addressParams is not long enough'),
      query('deviceType').exists().withMessage('deviceTpye is required'),
      query('deviceType').isIn(['mobile', 'web']).withMessage('deviceType is not a valid value')
    ], ImageDataController.getNasaImage)
  }
}