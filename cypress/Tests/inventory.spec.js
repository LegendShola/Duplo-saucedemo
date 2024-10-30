import loginPage from '../Pages/loginPage';
import inventoryPage from '../Pages/inventoryPage';
const data = require('../fixtures/testData.json'); // Import the testData


describe('Inventory Tests', () => {
    // Test credentials from fixture data
    const username = data.username;
    const password = data.password;

    before(() => {
        cy.clearCookies(); // Clear cookies before each test
        cy.clearLocalStorage(); // Clear local storage before each test
        
        loginPage.visit();
        loginPage.login(username, password);
    });

    it('Should display inventory list', () => {
        inventoryPage.verifyInventoryList();
        // Should filter items by "Price (low to high)"
        inventoryPage.filterProducts('lohi');
        // Should filter items by "Name (Z to A)"
        inventoryPage.filterProducts('za');
        // Should add an item to the cart
        inventoryPage.addToCart('Sauce Labs Backpack');
    });
});
