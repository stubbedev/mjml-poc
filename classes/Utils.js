import { readFileSync } from 'fs'

export class Utils {
    
    static generateId = (salt = null) => {
        if( ! salt ){
            salt = String(new Date().getTime())
        }
        return Buffer.from(salt, 'utf8').toString('base64').replace('==', '')
    }

    static kebabizeString = (str) => {
        return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
    }

    static readJsonFile = (str) => {
        try {
            const raw = readFileSync(str)
            return JSON.parse(raw)
        } catch (e) {
            return e
        }

    }
}




