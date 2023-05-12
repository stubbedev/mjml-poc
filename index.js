import { Tag } from './classes/Tag.js'
import { Utils } from './classes/Utils.js'

const data = Utils.readJsonFile('schema/tag.json')

const test_tag = new Tag(data)

console.log(JSON.stringify(test_tag.getJson()))