import { Client, GeocodeResponse } from "@googlemaps/google-maps-services-js";
import { Request } from 'express'
import { AdidasObserverAPILogger } from '../utils/logger'

class GmClient {
    protected client: Client
    
    constructor() {
        this.client = new Client()
    }

    public async getGeoCode(req: Request): Promise<GeocodeResponse> {
        let geocodeResult: GeocodeResponse
        
        // Check with tesst purpose only
        const address = req.query ? req.query.addressParams?.toString() : undefined
        try {
            geocodeResult = await this.client.geocode({
                params: { 
                    address: address,
                    key: process.env.GOOGLE_MAPS_API_KEY!,
                },
                timeout: 1000
            })
        } catch (err) {
            AdidasObserverAPILogger.logger.error(`[getGeoCode] [@googlemaps/google-maps-services-js] ${JSON.stringify(err)}`)
            throw new err
        }
        
        return geocodeResult
    }
}

export default GmClient
