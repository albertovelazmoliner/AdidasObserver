import { GeocodeResponse } from '@googlemaps/google-maps-services-js'
import { NextFunction, Request, Response } from 'express'
import NasaImageData from '../model/nasaImageData'
import gmClient from '../provider/gmClient'
import { NasaUrlComposer } from '../provider/nasaUrlComposer'
import { validationResult } from 'express-validator'

export class ImageDataController {    
    public static  async getNasaImage(req: Request, res: Response, _next: NextFunction) {        
        let geocodeResult: GeocodeResponse
        let nasaImage: NasaImageData

        try {
            validationResult(req).throw()
            geocodeResult = await gmClient.getGeoCode(req)

            if (!geocodeResult.data.results[0]) {
                throw new Error('No geocode result found for the given params')
            }

            const nasaParams = {
                date: req.query.imageDate,
                deviceType: req.query.deviceType,
                lat: geocodeResult.data.results[0].geometry.location.lat,
                lng: geocodeResult.data.results[0].geometry.location.lng,
                formattedAddress: geocodeResult.data.results[0].formatted_address
            }
            // tslint:disable-next-line:no-console
            console.log(nasaParams)
            nasaImage = NasaUrlComposer.urlGenerator(nasaParams);
        } catch (err) {
            if (Array.isArray(err.errors) && err.errors[0]) {
                const { param, msg } = err.errors[0]
                if (param === 'api_key') {
                    return res.status(401).send({ errorMessage: msg})    
                }
                if (param === 'addressParams' || param === 'deviceType') {
                    return res.status(400).send({ errorMessage: msg})    
                }
            }
            
            return res.status(404).send({ error: err.message })
        }

        return res.status(200).send(nasaImage)
    }
}