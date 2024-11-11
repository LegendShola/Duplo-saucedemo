class InventoryPage {
    // Method to verify that the inventory list is visible on the page
    verifyInventoryList() {
        // Asserts that the inventory list is visible
        cy.get('.inventory_list').should('be.visible');
    }

    // Method to add an item to the cart based on the item name
    addToCart(itemName) {
        // Verifies that the specified item is present in the inventory list
        cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('contain', itemName);
        // Clicks the add to cart button for the specified item
        cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    // Method to filter products based on the selected sorting option
    filterProducts(option) {
        // Selects a sorting option from the dropdown menu
        cy.get('.product_sort_container').select(option);
    }

}

// Exports an instance of InventoryPage for use in tests
export default new InventoryPage();
