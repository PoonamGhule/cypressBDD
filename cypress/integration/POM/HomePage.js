

 class HomePage{

    select={
        Ecommsite:"https://rahulshettyacademy.com/seleniumPractise/#/"

    }
     visiturl(){
        cy.visit(this.select.Ecommsite)
     }






}

export default HomePage