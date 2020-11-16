import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format

export class AdidasObserverAPILogger {
    public static myFormat = printf(info => {
        return `[${info.timestamp}] [${info.level}] => ${info.message}`
    })

    public static logger = createLogger({
        format: combine(
            label({ label: 'adidas-observer-api errors' }),
            timestamp(),
            AdidasObserverAPILogger.myFormat
        ),
        level: 'info',
        transports: [
            // new transports.File({ filename: 'aggregated.log' }),
            new transports.Console(),
        ],
    })
}