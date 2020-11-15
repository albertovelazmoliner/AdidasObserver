export class Utils {
    public static getUTCDate(date: any): String {
        const prevDate = date ? new Date(date) : new Date()
        const utcDate = `${prevDate.getUTCFullYear()}-${prevDate.getUTCMonth()}-${prevDate.getDate()}`
        return utcDate
    }
}