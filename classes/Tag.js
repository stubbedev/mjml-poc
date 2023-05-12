import { Utils } from './Utils.js'

export class Tag {
    constructor(
        tag,
        attributes,
        innerMJML,
        children
    ) {
        this.id = Utils.generateId()
        this.tag = tag
        this.attributes = attributes
        this.innerMJML = innerMJML
        this.children = children
    }
    /**
     * Returns JSON serializable object representation of component
     * @returns Object
     */
    getJson = () => {
        return {
            tag: this.tag,
            id: this.id,
            innerMJML: this.innerMJML,
            children: this.children,
            attributes: this.attributes
        }
    }

    getMjml = () => {
        let tagAttributes = ``
        if(this.attributes){
            for (const [key, value] of Object.entries(this.attributes)) {
                tagAttributes += ` ${Utils.kebabizeString(key)}="${value}"`
            }
        }
        let childMJML = ``
        if(this.children){
            this.children.forEach(child => {
                temp_tag = new Tag(child)
                childMJML += tag.getMjml()
            });
        }
        let startTag = `<${this.tag}${tagAttributes}>`
        let tagContent = `${this.innerMJML}${childMJML}`
        let endTag = `</${this.tag}>`
        return `${startTag}${tagContent}${endTag}`
    }

    setId = (salt) => {
        this.id = Utils.generateId(salt)
    }

    getId = () => {
        return this.id
    }

}