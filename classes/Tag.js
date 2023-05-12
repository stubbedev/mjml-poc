import { Utils } from './Utils.js'

export class Tag {
    constructor(
        data
    ) {
        this.id = Utils.generateId()
        this.tag = data.tag
        this.attributes = data.attributes ?? []
        this.innerMJML = data.innerMJML ?? ''
        this.children = data.children ?? []
    }
    /**
     * Returns JSON serializable object representation of component
     * @returns Object
     */
    getJson = () => {
        return this
    }

    setId = (salt) => {
        this.id = Utils.generateId(salt)
    }

    getId = () => {
        return this.id
    }

}