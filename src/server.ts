import fs from 'fs'
import https from 'https'
import app from './app'

const PORT = process.env.PORT

const cert = fs.readFileSync(__dirname + '/config/cert.pem')
const key = fs.readFileSync(__dirname + '/config/key.pem')

const httpsOptions = {
    cert: cert,
    key: key
}

https.createServer(httpsOptions, app).listen(PORT)
