import loginPage from '../Pages/loginPage';
import inventoryPage from '../Pages/inventoryPage';
import cartPage from '../Pages/cartPage';
const data = require('../fixtures/testData.json'); // Import the testData


describe('Cart Tests', () => {
    // Test credentials from fixture data
    const username = data.username;
    const password = data.password;

    beforeEach(() => {
        cy.clearCookies(); // Clear cookies before each test
        cy.clearLocalStorage(); // Clear local storage before each test

        cy.visit('');
        loginPage.login(username, password);
    });

    it('Should display items in cart', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        cartPage.viewCart();
        cartPage.verifyCartItems();
    });

    it('Should remove an item from cart', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        cartPage.viewCart();
        cartPage.removeItem();
        // Verify item removal
        cartPage.verifyItemRemoval();
    });
});
