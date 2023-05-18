describe("Calculator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    //   Do the number buttons update the display of the running total?

    it('should have working number buttons', () => {
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    })

    //   Do the arithmetical operations update the display with the result of the operation?
    //   E.g. does 2 + 2 - update the display to 4

    it('should update the display when arithmetical operations are pressed', () => {
        cy.get('#number2').click();
        cy.get('#operator-add').click();
        cy.get('#number2').click();
        cy.get('#operator-subtract').click();
        cy.get('.display').should('contain', '4')
    })

    //   Can multiple operations be chained together?
    //   E.g. does 3 + 1 - 2 == 2

    it('should be able to chain multiple operations together', () => {
        cy.get('#number2').click();
        cy.get('#operator-add').click();
        cy.get('#number3').click();
        cy.get('#operator-multiply').click();
        cy.get('#number6').click();
        cy.get('#operator-equals').click();

        cy.get('.display').should('contain', '30')
    })

    //   Is the output as expected for positive numbers

    it('should display positive numbers correctly', () => {
        cy.get('#number2').click();

        cy.get('.display').should('contain', '2')
    })

    //   Is the output as expected for negative numbers

    it('should display negative numbers correctly', () => {
        cy.get('#number2').click();
        cy.get('#operator-subtract').click();
        cy.get('#number4').click();
        cy.get('#operator-equals').click();

        cy.get('.display').should('contain', '-2')
    })

    //   Is the output as expected for decimal numbers

    it('should display decimal numbers correctly', () => {
        cy.get('#number2').click();
        cy.get('#decimal').click();
        cy.get('#number4').click();

        cy.get('.display').should('contain', '2.4')
    })

    //   Is the output as expected for very large numbers

    it('should display very large numbers correctly', () => {
        cy.get('#number1').click();
        const num0 = cy.get('#number0')
        for(let i = 0; i < 21; i++) {
            num0.click()
        }

        cy.get('.display').should('contain', '1e+21')
    })

    //   What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

    it('should show infinity when dividing a positive number by 0', () => {
        cy.get('#number1').click();
        cy.get('#operator-divide').click();
        cy.get('#number0').click();
        cy.get('#operator-equals').click();
        

        cy.get('.display').should('contain', 'Infinity')
    })
})