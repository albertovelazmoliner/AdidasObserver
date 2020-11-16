import { Client, GeocodeResponse } from "@googlemaps/google-maps-services-js";
import { Request } from 'express'

class GmClient {
    private client: Client
    
    constructor() {
        this.client = new Client()
    }

    public async getGeoCode(req: Request): Promise<GeocodeResponse> {
        let geocodeResult: GeocodeResponse
        const address = req.query.addressParams?.toString()
        try {
            geocodeResult = await this.client.geocode({
                params: { 
                    address: address,
                    key: process.env.GOOGLE_MAPS_API_KEY!,
                },
                timeout: 1000
            })
        } catch (err) {
            throw new err
        }
        
        return geocodeResult
    }
}

export default new GmClient()
