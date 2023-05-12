import mjml2html from 'mjml'

export class Compiler {
    constructor(
        mjml_string,
        mjml_options
    ) {
        this.mjml_string = mjml_string
        this.mjml_options = mjml_options
    }

    generateHTML = () => {
        if(this.mjml_options) {
            return mjml2html(this.mjml_string, this.mjml_options)
        } else {
            return mjml2html(this.mjml_string)
        }
        
    }
}