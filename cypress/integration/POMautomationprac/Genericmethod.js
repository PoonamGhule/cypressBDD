class GenericMethod{
    static visiturl(url){
        cy.visit(url)
    }
    static type(element,value){
        cy.get(element).type(value)
    }
    static clickele(ele){
        cy.get(ele).click()
    }
    static visible(value){
        cy.contains(value).should('be.visible')
    }
    static fileattach(ele,path){
        cy.get(ele).attachFile(path)
    }
    static validatetext(ele,text){
        cy.get(ele).should('have.text',text)
    }
}
export default GenericMethod