import { AddressType, GeocodeResponse, LocationType, Status } from "@googlemaps/google-maps-services-js";
import GmClient from '../../src/provider/gmClient'

class GmClientMock extends GmClient {

    constructor() {
        super()
        this.client.geocode = async () => {
            let res: GeocodeResponse
            res = {
                config: {},
                data: {
                    "error_message": '',
                    "results": [
                        {
                            "address_components": [
                                {
                                    "long_name": "Calle Tomás Zumalacárregui",
                                    "short_name": "Calle Tomás Zumalacárregui",
                                    "types": [
                                        AddressType.route
                                    ]
                                },
                                {
                                    "long_name": "Zaragoza",
                                    "short_name": "Zaragoza",
                                    "types": [
                                        AddressType.locality,
                                        AddressType.political
                                    ]
                                },
                                {
                                    "long_name": "Zaragoza",
                                    "short_name": "Z",
                                    "types": [
                                        AddressType.administrative_area_level_2,
                                        AddressType.political
                                    ]
                                },
                                {
                                    "long_name": "Aragón",
                                    "short_name": "Aragón",
                                    "types": [
                                        AddressType.administrative_area_level_1,
                                        AddressType.political
                                    ]
                                },
                                {
                                    "long_name": "Spain",
                                    "short_name": "ES",
                                    "types": [
                                        AddressType.country,
                                        AddressType.political
                                    ]
                                },
                                {
                                    "long_name": "50006",
                                    "short_name": "50006",
                                    "types": [
                                        AddressType.postal_code
                                    ]
                                }
                            ],
                            "formatted_address": "Calle Tomás Zumalacárregui, 50006 Zaragoza, Spain",
                            "geometry": {
                                "location_type": LocationType.GEOMETRIC_CENTER,
                                "viewport": {
                                    "northeast": {
                                        "lat": 41.644935030291499,
                                        "lng": -0.88613639999999994
                                    },
                                    "southwest": {
                                        "lat": 41.6422370697085,
                                        "lng": -0.89001100000000011
                                    }
                                },
                                "bounds": {
                                    "northeast": {
                                        "lat": 41.643897699999997,
                                        "lng": -0.88613639999999994
                                    },
                                    "southwest": {
                                        "lat": 41.643274400000003,
                                        "lng": -0.89001100000000011
                                    }
                                },
                                "location": {
                                    "lat": 41.643485400000003,
                                    "lng": -0.88820279999999996
                                }
                            },
                            "partial_match": true,
                            "place_id": "ChIJx1x4xN0UWQ0RRhUjzzCoz8M",
                            "plus_code": {
                                "compound_code": "string",
                                "global_code": "string"
                            },
                            "postcode_localities": [],
                            "types": [
                                AddressType.route
                            ]
                        }
                    ],
                    "status": Status.OK
                },
                headers: {},
                status: 200,
                statusText: ''
            }
            return res
        }
    }

}

export default GmClientMock
