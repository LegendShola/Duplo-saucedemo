class CheckoutPage {
    startCheckout() {
        cy.get('#checkout').click();
    }

    enterCheckoutInfo(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
        cy.get('#continue').click();
    }

    verifyTotalPrice() {
        cy.get('.inventory_item_price').invoke('text').then((itemPriceText) => {
            const itemPrice = parseFloat(itemPriceText.replace('$', ''));
            cy.log('Item Price:', itemPrice); // Debugging log
          
            cy.get('[data-test="tax-label"]').invoke('text').then((taxText) => {
                const tax = parseFloat(taxText.replace('Tax: $', ''));
                cy.log('Tax:', tax); // Debugging log
              
                cy.get('[data-test="total-label"]').invoke('text').then((totalText) => {
                    const total = parseFloat(totalText.replace('Total: $', ''));
                    cy.log('Total:', total); // Debugging log
          
                    // Check for NaN values before asserting
                    if (!isNaN(itemPrice) && !isNaN(tax) && !isNaN(total)) {
                    // Assert that item price + tax equals total
                        expect(itemPrice + tax).to.eq(total);
                    } else {
                    throw new Error('One or more values is NaN: Check itemPrice, tax, and total.');
                    }
                });
            });
        });
    
    }

    finishCheckout() {
        cy.get('#finish').click();
        cy.contains('Thank you for your order!').should('be.visible');
    }
}

export default new CheckoutPage();
