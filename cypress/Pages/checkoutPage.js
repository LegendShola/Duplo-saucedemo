class CheckoutPage {
    // Method to start the checkout process by clicking the checkout button
    startCheckout() {
        // Clicks the checkout button to begin the checkout process
        cy.get('#checkout').click();
    }

    // Method to enter checkout information: first name, last name, and postal code
    enterCheckoutInfo(firstName, lastName, postalCode) {
        // Types the first name into the corresponding input field
        cy.get('#first-name').type(firstName);
        // Types the last name into the corresponding input field
        cy.get('#last-name').type(lastName);
        // Types the postal code into the corresponding input field
        cy.get('#postal-code').type(postalCode);
        // Clicks the continue button to proceed to the next step
        cy.get('#continue').click();
    }

    // Method to verify the total price at checkout
    verifyTotalPrice() {
        // Retrieves the item price and converts it to a float
        cy.get('.inventory_item_price').invoke('text').then((itemPriceText) => {
            const itemPrice = parseFloat(itemPriceText.replace('$', ''));
            cy.log('Item Price:', itemPrice); // Debugging log for item price
          
            // Retrieves the tax amount and converts it to a float
            cy.get('[data-test="tax-label"]').invoke('text').then((taxText) => {
                const tax = parseFloat(taxText.replace('Tax: $', ''));
                cy.log('Tax:', tax); // Debugging log for tax
              
                // Retrieves the total price and converts it to a float
                cy.get('[data-test="total-label"]').invoke('text').then((totalText) => {
                    const total = parseFloat(totalText.replace('Total: $', ''));
                    cy.log('Total:', total); // Debugging log for total price

                    // Check for NaN values before asserting
                    if (!isNaN(itemPrice) && !isNaN(tax) && !isNaN(total)) {
                        // Assert that the sum of item price and tax equals the total
                        expect(itemPrice + tax).to.eq(total);
                    } else {
                        // Throws an error if any value is NaN
                        throw new Error('One or more values is NaN: Check itemPrice, tax, and total.');
                    }
                });
            });
        });
    }

    // Method to finish the checkout process
    finishCheckout() {
        // Clicks the finish button to complete the order
        cy.get('#finish').click();
        // Asserts that the thank you message is visible after completing the checkout
        cy.contains('Thank you for your order!').should('be.visible');
    }
}

// Exports an instance of CheckoutPage for use in tests
export default new CheckoutPage();
