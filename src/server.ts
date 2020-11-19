import fs from 'fs'
import https from 'https'
import app from './app'

const cert = fs.readFileSync(__dirname + '/config/cert.pem')
const key = fs.readFileSync(__dirname + '/config/key.pem')

const httpsOptions = {
    cert: cert,
    key: key
}

https.createServer(httpsOptions, app).listen(3000, '0.0.0.0')
