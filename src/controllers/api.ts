import { NextFunction, Request, Response } from 'express'
import { AdidasObserverAPILogger } from '../utils/logger'

export default {
    getApi: (req: Request, res: Response, next: NextFunction) => {
        AdidasObserverAPILogger.logger.info(`[GET] [/api] [status] Success`)
        return res.status(200).send({ title: 'Adidas Observer API', status: 'success'})
    }
}