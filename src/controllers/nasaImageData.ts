import { GeocodeResponse } from '@googlemaps/google-maps-services-js'
import { NextFunction, Request, Response } from 'express'
import NasaImageData from '../model/nasaImageData'
import gmClient from '../provider/gmClient'
import { NasaUrlComposer } from '../provider/nasaUrlComposer'

export class ImageDataController {
    public static getApi(req: Request, res: Response, next: NextFunction) {
        return res.status(200).send({ title: 'Order API' })
    }
    
    public static  async getNasaImage(req: Request, res: Response, next: NextFunction) {
        let geocodeResult: GeocodeResponse
        let nasaImage: NasaImageData
        try {
            geocodeResult = await gmClient.getGeoCode(req)
            // tslint:disable-next-line:no-console
            console.log(geocodeResult.data.results[0])
            const nasaParams = {
                date: req.query.date,
                deviceType: req.query.deviceType,
                lat: geocodeResult.data.results[0].geometry.location.lat,
                lng: geocodeResult.data.results[0].geometry.location.lng,
            }
            
            // tslint:disable-next-line:no-console
            console.log(nasaParams)
            nasaImage = NasaUrlComposer.urlGenerator(nasaParams);
        } catch (err) {
            return res.status(404).send({ error: 'error' })
        }

        return res.status(200).send(nasaImage)
    }
}