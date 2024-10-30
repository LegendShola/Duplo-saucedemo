class InventoryPage {
    verifyInventoryList() {
        cy.get('.inventory_list').should('be.visible');
    }

    addToCart(itemName) {
        cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('contain', itemName);
        cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    filterProducts(option) {
        cy.get('.product_sort_container').select(option);

    }
}

export default new InventoryPage();
