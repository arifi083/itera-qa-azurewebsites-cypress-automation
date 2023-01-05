import 'cypress-file-upload';

describe('Test automation practice form', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#name").type("Arif")
        cy.get("input#phone").type("01772921632")
        cy.get("input#email").type("arifatif163@gmail.com")
        cy.get("input#password").type("12345678")
        cy.wait(3000)
        cy.get("textarea#address").type("I love my islamic life")
        cy.get("button[type='submit']").submit()  //it is not form that's whay it tesst case does not run
    })

    it('Test Case 2', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibilty of radio button
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        //selecting radio button
        cy.get("input#male").check().should('be.visible')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.visible')
        cy.get("input#male").should('not.be.checked')
      
    })

    it('Test Case 3', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibilty of radio button
        cy.get("input#monday").should("be.visible")

        //selecting single chekbox
         cy.get("input#monday").check().should('be.checked')

          //unselecting all the checkbox
          cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting all the checkbox
         cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        
       
       
    })

    it('Test Case 4', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("select[class='custom-select']").select('Potugal').should('have.value','5')
        
    })


    it('Test Case 5', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")


        //selecting radio button
       
        cy.get("#2years").check({force : true}).should('be.checked')
        cy.get("input#3years").should('not.be.checked')
       
    })

    it('Test Case 6', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

         //selecting single chekbox
         cy.get("input#selenium").check({force : true}).should('be.checked')

          //unselecting all the checkbox
        cy.get("input.custom-control-input[type='checkbox']").uncheck({force : true}).should('not.be.checked')

        
         //selecting all the checkbox
        cy.get("input.custom-control-input[type='checkbox']").check({force : true}).should('be.checked')
       
       
      
    })

    it('Test Case 7', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("#inputGroupFile02").attachFile('test.pdf')
        cy.get("label[for='exampleInputFile']").should('have.text','Upload your file')
        // cy.get('#file-submit').click()
        // cy.wait(5000)
        // cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

   


  })