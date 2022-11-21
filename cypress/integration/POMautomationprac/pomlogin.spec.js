
///<reference types='cypress'/>
import GenericMethod from "../POMautomationprac/Genericmethod"
import CssSelector from "../POMautomationprac/selecter"
let file = "info.xlsx"
let selector = new CssSelector()
describe('automation exercise practice', function () {
    it('login with valid credential', function () {
        GenericMethod.visiturl(selector.element.automationsite)
        GenericMethod.type(selector.element.username, "gauri@gmail.com")
        GenericMethod.type(selector.element.password, "Gauri99")
        GenericMethod.clickele(selector.element.loginbtn)
        GenericMethod.visible('Full-Fledged practice website')
    })

    it('visit contact us page', function () {
        GenericMethod.clickele(selector.element.contactus)
        GenericMethod.type(selector.element.coname, "poonam")
        GenericMethod.type(selector.element.coemail, "punamtambe27@gmail.com")
        GenericMethod.type(selector.element.cosubject, "enquiry")
        GenericMethod.type(selector.element.comessage, "give more info about your site")
        GenericMethod.fileattach(selector.element.cofileup, file)
        GenericMethod.clickele(selector.element.cosubmit)
        GenericMethod.validatetext(selector.element.cotextvalidate,'Success! Your details have been submitted successfully.')
    })
})