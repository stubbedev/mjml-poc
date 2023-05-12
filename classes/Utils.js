import { readFileSync } from 'fs'

export class Utils {
    
    static print = (heading=null, value=null, encode_json=true) => {
        if(heading){
            console.log(heading)
        }
        if(value && encode_json){
            console.log(JSON.stringify(value), '\n')
        } else {
            console.log(value, '\n')
        }
        console.log('\n')
    }

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

    static generateMJML = (json) => {

        let tagAttributes = ``
        if(json.attributes){
            for (const [key, value] of Object.entries(json.attributes)) {
                tagAttributes += ` ${this.kebabizeString(key)}="${value}"`
            }
        }
        let childMJML = ``

        if(json.children){
            json.children.forEach(child => {
                childMJML += this.generateMJML(child)
            })
        }

        if(!json.children && !json.innerMJML){
            return `<${json.tag}${tagAttributes} />`
        } else {
            let startTag = `<${json.tag}${tagAttributes}>`
            let tagContent = `${json.innerMJML ?? ''}${childMJML}`
            let endTag = `</${json.tag}>`
            return `${startTag}${tagContent}${endTag}`
        }


    }
}




