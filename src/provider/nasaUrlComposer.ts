import NasaImageData from '../model/nasaImageData'
import { constants } from '../utils/constants'
import { Utils } from '../utils/utils'


export class NasaUrlComposer {
    public static urlGenerator(params: any): NasaImageData {
        const { lat, lng, date, deviceType, formattedAddress } = params
        const apikey = process.env.NASA_API_KEY
        const utcDate = Utils.getUTCDate(date)
        const dim = deviceType === 'mobile' ? '0.15' : '0.25'
        const urlNasa: String = `${constants.NASA_BASE_URL}?lon=${lng}&lat=${lat}&date=${utcDate}&dim=${dim}&api_key=${apikey}`
        return {
            formattedAddress: formattedAddress,
            imageDate: utcDate,
            imageUrl: urlNasa
        }
    }
}