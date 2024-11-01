class CartPage {
    // Method to view the cart by clicking on the cart link
    viewCart() {
        // Clicks on the shopping cart link to navigate to the cart page
        cy.get('.shopping_cart_link').click();
    }

    // Method to verify that cart items are visible
    verifyCartItems() {
        // Asserts that at least one cart item is visible on the page
        cy.get('.cart_item').should('be.visible');
    }

    returnHome() {
        // Clicks the burger menu button to open the side menu
        cy.get('#react-burger-menu-btn').click();
        // Clicks the All items menu
        cy.get('#inventory_sidebar_link').click();
    }

    // Method to remove an item from the cart
    removeItem() {
        // Clicks the remove button for the specified item (Sauce Labs Backpack)
        cy.get("#remove-sauce-labs-backpack").click();
    }

    // Method to verify that the item has been removed from the cart
    verifyItemRemoval() {
        // Asserts that the item (Sauce Labs Backpack) no longer exists in the cart
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('not.exist');
    }
}

// Exports an instance of CartPage for use in tests
export default new CartPage();
