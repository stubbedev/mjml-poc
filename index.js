import { Tag } from './classes/Tag.js'
import { Utils } from './classes/Utils.js'
import { Compiler } from './classes/Compiler.js'

const data = Utils.readJsonFile('schema/tag.json')

const layout = new Tag(data)

Utils.print('CONTENT ID:', layout.getId())
Utils.print('CONTENT JSON:', layout.getJson())
Utils.print('MJML EXPORT:', Utils.generateMJML(layout.getJson()), false)

const comp = new Compiler(Utils.generateMJML(layout.getJson()))

Utils.print('HTML EXPORT:', comp.generateHTML())
