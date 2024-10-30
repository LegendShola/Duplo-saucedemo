class CartPage {
    viewCart() {
        cy.get('.shopping_cart_link').click();
    }

    verifyCartItems() {
        cy.get('.cart_item').should('be.visible');
    }

    removeItem() {
        cy.get("#remove-sauce-labs-backpack").click();
    }

    verifyItemRemoval() {
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('not.exist');
    }
}

export default new CartPage();
