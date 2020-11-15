import { NextFunction, Request, Response } from 'express'

export default {
    getApi: (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).send({ title: 'Adidas Observer API', status: 'success'})
    }
}